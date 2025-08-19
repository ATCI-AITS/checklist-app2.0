import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { styles } from "../fonts/styles.js";
import { tabNames } from "../data/TabNames";
import { Document, Page, Text, pdf } from "@react-pdf/renderer";

const Result = () => {
  // 假設您從路由中獲取到所需的數據
  const location = useLocation();
  const navigate = useNavigate();

  const {
    CheckItems,
    locationName,
    inspector,
    selectedDate,
    weather,
    roadNames,
    directions,
    roads,
  } = location.state; // 根據需要調整

  const saved = JSON.parse(localStorage.getItem("checklistData")) || {};
  const {
    activeButtons: savedButtons = {},
    userInput: savedInput = {},
    highlightRemarks: savedHighlights = {},
    uploadedImages: savedImages = {},
  } = saved;

  const [onlyNonCompliant, setOnlyNonCompliant] = useState(false);
  const [improvementField, setImprovementField] = useState(false);

  const [selectedRoad, setSelectedRoad] = useState(roads[0]);
  const [currentPageCode, setCurrentPageCode] = useState();
  const [currentPageName, setCurrentPageName] = useState();

  const [isLoading, setIsLoading] = useState(false); // 加载状态

  const pdfRef = useRef(null);

  const [choosingResult, setChoosingResult] = useState(savedButtons);
  const [groupedByRoadName, setGroupedByRoadName] = useState({});

  const MAX_PAGES_PER_BATCH = 10;

  useEffect(() => {
    setCurrentPageCode(
      `${selectedRoad}-${improvementField}-${onlyNonCompliant}`
    );

    const compliance = onlyNonCompliant
      ? "具交通安全風險之項目"
      : "所有檢核項目";
    const name = `${selectedRoad}-${compliance}`;
    setCurrentPageName(name);

    // 更新 choosingResult
    setChoosingResult(onlyNonCompliant ? savedHighlights : savedButtons);
  }, [selectedRoad, onlyNonCompliant, improvementField]);

  useEffect(() => {
    const grouped = roads.reduce((acc, road) => {
      acc[road] = [];
  
      if (savedButtons[road]) {
        Object.keys(savedButtons[road]).forEach((itemId) => {
          // 取出使用者作答、備註、圖片
          const option = savedButtons[road][itemId];
          const remark = savedHighlights[road]?.[itemId] || "";
          const image = savedImages[road]?.[itemId] || "";
  
          // 解析真正的題號（你後面渲染也有這樣做）
          const parts = itemId.split("_");
          const realId = parts[parts.length - 1];
  
          // 找到該題的定義，以取得 asterisk
          const checkItem = Object.values(CheckItems).flat().find(c => c.id === realId);
          if (!checkItem) return;
  
          // 期望作答：yes → 是；no → 否
          const expected = checkItem.asterisk === "yes" ? "是" : "否";
  
          // 是否要納入清單
          const isAnswered = option && option !== "無須檢查";
          const matchAsterisk = isAnswered && option === expected;
  
          // onlyNonCompliant：只顯示「作答符合 asterisk」的項目
          // 非 onlyNonCompliant：顯示全部
          if (!onlyNonCompliant || matchAsterisk) {
            acc[road].push({
              id: realId,
              option,
              remark,
              image,
            });
          }
        });
      }
      return acc;
    }, {});
  
    setGroupedByRoadName(grouped);
  }, [onlyNonCompliant, roads, savedButtons, savedHighlights, savedImages, CheckItems]);
  

  // 根據檢查代碼的ID來獲取它所屬的sheet
  const getSheetById = (id) => {
    for (const sheet in CheckItems) {
      if (CheckItems[sheet].some((item) => item.id === id)) {
        return sheet; // 返回該ID所屬的sheet，例如 "A" 或 "B"
      }
    }
    return null; // 如果沒有找到匹配的，返回null
  };

  const handleChange = () => {
    const state = {
      ...location.state,
      savedButtons,
      savedHighlights,
      savedInput,
      savedImages,
    };
    navigate("/checklist", { state: { ...state, from: "Result" } });
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 切換到指定的路段並等待頁面渲染完成
  const switchToRoadAndGeneratePDF = async (pageCode, index, isOnly) => {
    setSelectedRoad(pageCode); // 切換到該路段
    setOnlyNonCompliant(isOnly);

    const targetId = `${pageCode}-false-${isOnly}-pdf-content`;
    console.log(`跳轉至 ${targetId}`);

    // 🔁 等待元素實際出現並完成渲染
    await waitForElement(targetId);
    await delay(300); // ✅ 可以視需要加一點 delay 確保完全渲染

    await generatePDFForRoad(pageCode, index, isOnly);
  };

  const waitForElement = (id, timeout = 5000) => {
    return new Promise((resolve, reject) => {
      const start = Date.now();

      const check = () => {
        const element = document.getElementById(id);
        if (element) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              resolve(element);
            });
          });
        } else if (Date.now() - start > timeout) {
          reject(new Error(`元素 ${id} 在 ${timeout}ms 內未出現`));
        } else {
          setTimeout(check, 100);
        }
      };
      check();
    });
  };

  const generatePDFForRoad = async (pageCode, index, isOnly) => {
    // 1. 取得要截圖的元素
    const element = document.getElementById(
      `${pageCode}-false-${isOnly}-pdf-content`
    );
    if (!element) return;

    // 2. 初始化 jsPDF（A4 尺寸），仅对第一条路执行一次
    if (index === 0) {
      pdfRef.current = new jsPDF("p", "mm", "a4");
    }
    const pdf = pdfRef.current;

    // 3. 计算 PDF 页面和图片参数
    const pageW = pdf.internal.pageSize.getWidth(); // 210 mm
    const pageH = pdf.internal.pageSize.getHeight(); // 297 mm
    const margin = 10; // 10 mm 白边
    const usableW = pageW - margin * 2; // 可用宽度
    const usableH = pageH - margin * 2; // 可用高度

    // 4. 像素 ↔ 毫米 转换比 (假定 96 DPI)
    const pxPerMm = 96 / 25.4;
    // 目标画布宽度 (px)，确保画布宽度对应 PDF 中的 usableW
    const targetCanvasWidthPx = usableW * pxPerMm;

    // 5. 临时强制 element 宽度，使 html2canvas 输出固定宽度
    const originalStyleWidth = element.style.width;
    element.style.width = `${targetCanvasWidthPx}px`;

    // 6. 用 html2canvas 渲染整张 canvas，不依赖屏幕分辨率
    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 1,
      width: element.scrollWidth,
      height: element.scrollHeight,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    // 恢复原始宽度
    element.style.width = originalStyleWidth;

    // 7. 准备分页切片参数
    const imgWidthPx = canvas.width; // 应等于 targetCanvasWidthPx
    const imgWidthMm = usableW; // PDF 中插入图片的宽度 (mm)
    const sliceHeightPx = usableH * pxPerMm; // 每页对应的画布高度 (px)

    // 8. 按页切片并插入 PDF
    let yPx = 0;
    let pageIndex = 0;
    while (yPx < canvas.height) {
      const thisSlicePx = Math.min(sliceHeightPx, canvas.height - yPx);

      // 新建临时 canvas，仅存本页图
      const tmp = document.createElement("canvas");
      tmp.width = imgWidthPx;
      tmp.height = thisSlicePx;
      tmp
        .getContext("2d")
        .drawImage(
          canvas,
          0,
          yPx,
          imgWidthPx,
          thisSlicePx,
          0,
          0,
          imgWidthPx,
          thisSlicePx
        );

      // 导出本页图片数据
      const sliceData = tmp.toDataURL("image/png");

      // 计算本页高度 (mm)
      const sliceHeightMm = thisSlicePx / pxPerMm;

      // 每页前插入新页（0 号页除外）
      if (pageIndex > 0) pdf.addPage();
      pdf.addImage(sliceData, "PNG", margin, margin, imgWidthMm, sliceHeightMm);

      yPx += thisSlicePx;
      pageIndex++;
    }

    // 9. 如果不是最后一条路，添加一页空白分隔
    if (index < roadNames.length - 1) pdf.addPage();
  };

  const FirstPDFDocument = () => (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>道路安全檢查結果</Text>
        <Text style={styles.subheader}>路口名稱：{locationName}</Text>
        <Text style={styles.subheader}>填列人員：{inspector}</Text>
        <Text style={styles.subheader}>填寫日期：{selectedDate}</Text>
        <Text style={styles.subheader}>天氣：{weather}</Text>
      </Page>
    </Document>
  );

  const generatedMultiplePDF = async (isOnly) => {
    // pdfRef.current = new jsPDF("p", "mm", "a4");

    const pdfBuffers = [];
    let pageCounter = 0;
    const roads = Object.keys(groupedByRoadName);

    for (let i = 0; i < roads.length; i++) {
      const road = roads[i];
      console.log("generatedMultiplePDF: 開始處理", road);
      if (!pdfRef.current || pageCounter >= MAX_PAGES_PER_BATCH) {
        if (pdfRef.current) {
          try {
            const blob = await pdfRef.current.output("blob");
            console.log(
              "即將輸出 PDF，目前頁數：",
              pdfRef.current.internal.getNumberOfPages()
            );
            console.log("pdfRef.current 內容：", pdfRef.current);

            // ✅ 安全檢查
            if (!blob) {
              throw new Error("jsPDF.output('blob') 回傳為 null/undefined！");
            }

            const buffer = await blob.arrayBuffer();
            pdfBuffers.push(buffer);
            console.log(
              "成功儲存一批 PDF buffer，頁數：",
              pdfRef.current.internal.getNumberOfPages()
            );
          } catch (err) {
            console.error("PDF 輸出失敗！", err);
          }
        }

        pdfRef.current = new jsPDF("p", "mm", "a4");
        pageCounter = 1; // ✅ 因為我們真的加了一頁內容
      }

      const beforeCount = pdfRef.current.internal.getNumberOfPages();
      await switchToRoadAndGeneratePDF(road, i, isOnly);
      const afterCount = pdfRef.current.internal.getNumberOfPages();
      pageCounter += afterCount - beforeCount;
      console.log("pageCounter: ", pageCounter);
    }

    if (pdfRef.current) {
      const numPages = pdfRef.current.internal.getNumberOfPages?.() || 0;
      if (numPages > 0) {
        try {
          const buffer = pdfRef.current.output("arraybuffer");
          pdfBuffers.push(buffer);
          console.log("成功輸出 buffer，頁數：", numPages);
        } catch (err) {
          console.error("PDF 輸出失敗（非空頁）", err);
        }
      } else {
        console.warn("跳過空 PDF，不輸出！");
      }
    }

    return pdfBuffers;
  };

  const generatedFirstPDF = async () => {
    const coverPageBlob = await pdf(<FirstPDFDocument />).toBlob();
    const coverPageBytes = await coverPageBlob.arrayBuffer();
    return coverPageBytes;
  };

  const { PDFDocument } = require("pdf-lib");
  const mergePDFs = async (coverPageBytes, pdfBuffers) => {
    // 創建一個新的 PDF 文檔來合併
    const finalPdf = await PDFDocument.create();

    // 加載首頁 PDF
    const coverPdfDoc = await PDFDocument.load(coverPageBytes);
    const coverPages = await finalPdf.copyPages(
      coverPdfDoc,
      coverPdfDoc.getPageIndices()
    );
    coverPages.forEach((page) => finalPdf.addPage(page));

    // 加入每一個內容 PDF
    for (let i = 0; i < pdfBuffers.length; i++) {
      console.log(`pdfBuffers: ${pdfBuffers.length}, now i = ${i}`);
      const contentPdfDoc = await PDFDocument.load(pdfBuffers[i]);
      const contentPages = await finalPdf.copyPages(
        contentPdfDoc,
        contentPdfDoc.getPageIndices()
      );
      contentPages.forEach((page) => finalPdf.addPage(page));
    }
    return await finalPdf.save();
  };

  const processQueue = async (isOnly) => {
    setIsLoading(true);
    const multiPageBuffers = await generatedMultiplePDF(isOnly); // ← 現在是一個 Array
    const coverPageBytes = await generatedFirstPDF();
    const mergedPdfBytes = await mergePDFs(coverPageBytes, multiPageBuffers);

    const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${locationName}之${
      isOnly ? "具道路安全問題項目" : "所有檢核項目"
    }.pdf`;
    link.click();
    setIsLoading(false);
  };

  return (
    <div>
      <div className="top-bar">
        <button
          className="topbar-button topbar-button-left"
          onClick={handleChange}
        >
          <div className="arrow-container">
            <svg
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7v14z" />
            </svg>
          </div>
          修改檢核內容
        </button>
      </div>
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-message">輸出中...請稍候</div>
        </div>
      )}
      <div
        className="result-container"
        style={{
          opacity: isLoading ? 0 : 1,
          pointerEvents: isLoading ? "none" : "auto",
        }}
      >
        <div className="sidebar">
          <h2>路名分頁</h2>
          <ul>
            {roadNames.map((roadName, roadNameIdx) => (
              <li
                key={roadNameIdx}
                className={
                  selectedRoad === `${roadName}-${directions[roadNameIdx]}`
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedRoad(`${roadName}-${directions[roadNameIdx]}`)
                }
              >
                {`${roadName}-${directions[roadNameIdx]}`}
              </li>
            ))}
          </ul>

          {/* 顯示區域 */}
          <div className="display-section">
            <h2>篩選</h2>
            <div className="checkbox-container">
              <label>
                <input
                  type="checkbox"
                  checked={onlyNonCompliant}
                  onChange={() => setOnlyNonCompliant(!onlyNonCompliant)}
                />
                具交通安全風險
                <br></br>
                之項目
              </label>
            </div>
          </div>
          <div className="display-section">
            <h2>輸出</h2>
            <button
              className="output-button all"
              onClick={() => processQueue(false)}
              // onClick={processQueue}
              disabled={isLoading}
            >
              <svg
                className="download-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 16l4-5h-3V3h-2v8H8l4 5zm-8 2v2h16v-2H4z" />
              </svg>
              全部檢核結果
            </button>
            <button
              className="output-button problem"
              onClick={() => processQueue(true)}
              disabled={isLoading}
            >
              <svg
                className="download-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 16l4-5h-3V3h-2v8H8l4 5zm-8 2v2h16v-2H4z" />
              </svg>
              安全風險項目
            </button>
          </div>
        </div>

        <div className="result-sheet-content">
          <div id={`${currentPageCode}-pdf-content`}>
            <div className="header-section">
              <h1 className="centered-title">檢核結果</h1>
              <h2 className="centered-page-name">{currentPageName}</h2>
            </div>

            {groupedByRoadName[selectedRoad] &&
            groupedByRoadName[selectedRoad].length > 0 ? (
              <table>
                <colgroup>
                  <col style={{ width: "8%" }} />   {/* 檢查代碼 */}
                  <col style={{ width: "42%" }} />   {/* 檢查細項 */}
                  <col style={{ width: "5%" }} />   {/* 選項 */}
                  <col style={{ width: "45%" }} />   {/* 備註 */}
                  {/* 如果之後要恢復改善說明，這裡再補一個 <col style={{ width: "30%" }} /> */}
                </colgroup>
                <thead>
                  <tr>
                    <th
                      className="category-header"
                      style={{
                        textAlign: "center",
                        verticalAlign: "middle",
                        backgroundColor: "#e0e0e0",
                        border: "1px solid #ccc", // 灰色的邊線
                      }}
                    >
                      檢查代碼
                    </th>
                    <th
                      style={{
                        verticalAlign: "middle",
                        backgroundColor: "#e0e0e0",
                        border: "1px solid #ccc", // 灰色的邊線
                      }}
                    >
                      檢查細項
                    </th>
                    <th
                      style={{
                        verticalAlign: "middle",
                        backgroundColor: "#e0e0e0",
                        border: "1px solid #ccc", // 灰色的邊線
                      }}
                    >
                      選項
                    </th>
                    <th
                      style={{
                        verticalAlign: "middle",
                        backgroundColor: "#e0e0e0",
                        border: "1px solid #ccc", // 灰色的邊線
                      }}
                    >
                      備註
                    </th>
                    {/* {onlyNonCompliant && (
                      <th
                        style={{
                          width: "40%",
                          verticalAlign: "middle",
                          backgroundColor: "#e0e0e0",
                          border: "1px solid #ccc", // 灰色的邊線
                        }}
                      >
                        改善說明
                      </th>
                    )} */}
                  </tr>
                </thead>
                <tbody>
                  {groupedByRoadName[selectedRoad].map((item, index) => {
                    const parts = item.id.split("_");
                    const realId = parts[parts.length - 1];

                    // 根據 item 獲取對應的 CheckItems 項目
                    const checkItem = Object.values(CheckItems)
                      .flat()
                      .find((check) => check.id === realId);
                    const sheet = getSheetById(item.id);
                    const isFirstInSheet =
                      index === 0 ||
                      getSheetById(
                        groupedByRoadName[selectedRoad][index - 1].id
                          .split("_")
                          .pop()
                      ) !== sheet;

                    return (
                      <React.Fragment key={item.id}>
                        {isFirstInSheet && (
                          <tr>
                            <td
                              colSpan={onlyNonCompliant ? 5 : 4}
                              style={{
                                fontWeight: "bold",

                                padding: "10px",
                                backgroundColor: "#f9f9f9", // 柔和的背景色
                              }}
                            >
                              {tabNames[sheet]}
                            </td>
                          </tr>
                        )}
                        <tr>
                          <td style={{ textAlign: "center" }}>
                             {realId}
                          </td>
                          <td className="description-cell">
                            {checkItem.description}
                          </td>

                          <td>
                            {item.option}
                            {item.option === "是" &&
                              checkItem.asterisk === "yes" && (
                                <span className="asterisk">＊</span>
                              )}
                            {item.option === "否" &&
                              checkItem.asterisk === "no" && (
                                <span className="asterisk">＊</span>
                              )}
                          </td>
                          <td
                            style={{
                              padding: "10px",
                              boxSizing: "border-box",
                              position: "relative",
                            }}
                          >
                            <div className="remark-display">
                              {item.remark}
                              {Array.isArray(item.image) &&
                                item.image.length > 0 && (
                                  <div className="image-gallery">
                                    {item.image.map((imgSrc, idx) => (
                                      <img
                                        key={idx}
                                        src={imgSrc}
                                        alt={`Uploaded ${idx + 1}`}
                                        style={{
                                          maxWidth: "250px",
                                          marginTop: "10px",
                                          position:
                                            "relative" /* 讓圖片能相對備註欄移動 */,
                                          left: onlyNonCompliant
                                            ? "-30px"
                                            : "0",
                                          zIndex: 1,
                                        }}
                                      />
                                    ))}
                                  </div>
                                )}
                            </div>
                          </td>

                          {/* {onlyNonCompliant && (
                            <td className="rule-display">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: checkItem.rule || "無說明",
                                }}
                              />
                            </td>
                          )} */}
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p>無具交通安全風險之項目。</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
