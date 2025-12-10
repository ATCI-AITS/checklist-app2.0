import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";
import { tabNames } from "../data/TabNames";
import { pdf } from "@react-pdf/renderer";
import { PDFReportDocument } from "./PDFReportDocument";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. 解構路由傳遞過來的資料
  const {
    CheckItems,
    locationName,
    inspector,
    selectedDate,
    weather,
    roadNames,
    directions,
    roads,
  } = location.state || {};

  // 2. 從 LocalStorage 讀取填寫內容
  const saved = JSON.parse(localStorage.getItem("checklistData")) || {};
  const {
    activeButtons: savedButtons = {},
    userInput: savedInput = {},
    uploadedImages: savedImages = {},
  } = saved;

  // 3. UI 狀態管理
  const [onlyNonCompliant, setOnlyNonCompliant] = useState(false); // 控制畫面上的篩選
  const [selectedRoad, setSelectedRoad] = useState(roads ? roads[0] : ""); // 控制目前選取的路段分頁
  const [currentPageName, setCurrentPageName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // 用於「畫面顯示」的資料 (會隨 onlyNonCompliant 改變)
  const [groupedByRoadName, setGroupedByRoadName] = useState({});

  // 更新頁面標題
  useEffect(() => {
    const compliance = onlyNonCompliant ? "具交通安全風險之項目" : "所有檢查項目";
    setCurrentPageName(`${selectedRoad} - ${compliance}`);
  }, [selectedRoad, onlyNonCompliant]);

  // =========================================================================
  // 核心邏輯：資料篩選與分組函式
  // applyFilter: boolean -> true (只顯示風險項目) / false (顯示全部)
  // =========================================================================
  const getPDFData = (applyFilter) => {
    if (!roads) return {};

    return roads.reduce((acc, road) => {
      acc[road] = [];
      
      // 遍歷所有 Sheet (OA, OB, OC...) 的所有項目
      Object.values(CheckItems).flat().forEach((checkItem) => {
        const realId = checkItem.id;
        const option = savedButtons[road]?.[realId];
        const remark = savedInput[road]?.[realId] || "";
        const image = savedImages[road]?.[realId] || []; // 確保 image 是陣列

        // 如果使用者沒填寫該題，跳過
        if (!option) return;

        // 判斷是否符合風險定義 (Asterisk 邏輯)
        const expected = checkItem.asterisk === "yes" ? "是" : "否";
        // 排除 "無需" 的情況
        const isAnswered = option && option !== "無需" && option !== "無需檢查"; 
        const matchAsterisk = isAnswered && option === expected;

        // 判斷是否加入資料集：
        // 1. 如果 applyFilter 為 false (全部輸出) -> 加入
        // 2. 如果 applyFilter 為 true (僅風險) -> 只有 matchAsterisk 為真才加入
        if (!applyFilter || matchAsterisk) {
          acc[road].push({
            id: realId,
            option,
            remark,
            image,
          });
        }
      });
      return acc;
    }, {});
  };

  // =========================================================================
  // Effect：當 UI 篩選狀態改變時，更新畫面上的表格資料
  // =========================================================================
  useEffect(() => {
    // 這裡依賴 UI 的 onlyNonCompliant 狀態
    const dataForScreen = getPDFData(onlyNonCompliant);
    setGroupedByRoadName(dataForScreen);
  }, [onlyNonCompliant, roads, savedButtons, savedInput, savedImages, CheckItems]);

  // 輔助：取得 ID 對應的 Sheet 名稱 (用於畫面顯示)
  const getSheetById = (id) => {
    for (const sheet in CheckItems) {
      if (CheckItems[sheet].some((item) => item.id === id)) {
        return sheet;
      }
    }
    return null;
  };

  const handleModify = () => {
    // 回到檢查表頁面，帶回現有狀態
    const state = {
      ...location.state,
      // 這裡其實不需要特別帶 savedButtons 等，因為 CheckList 會自己讀 localStorage
      // 但為了保險起見或特殊邏輯保留
      from: "Result" 
    };
    navigate("/checklist", { state });
  };

  // =========================================================================
  // PDF 生成與下載流程
  // isOnly: boolean -> 由按鈕點擊決定 (true: 風險, false: 全部)
  // =========================================================================
  const processQueue = async (isOnly) => {
    setIsLoading(true);
  
    try {
      // 1. [關鍵] 呼叫函式產生一份全新的資料，不受畫面 State 影響
      const dataForPDF = getPDFData(isOnly);

      // 2. 生成 PDF Blob
      const blob = await pdf(
        <PDFReportDocument 
          groupedByRoadName={dataForPDF} // 傳入計算好的資料
          CheckItems={CheckItems}
          locationName={locationName}
          // 標題依照按鈕意圖決定
          currentPageName={`${locationName} - ${isOnly ? "風險項目" : "所有項目"}`}
          onlyNonCompliant={isOnly}
          // 封面所需資訊
          inspector={inspector}
          selectedDate={selectedDate}
          weather={weather}
        />
      ).toBlob();
  
      // 3. 觸發瀏覽器下載
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${locationName}_${isOnly ? "風險項目" : "所有項目"}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
  
    } catch (error) {
      console.error("PDF 生成失敗:", error);
      alert("PDF 生成失敗，請檢查 console 錯誤訊息 (通常是字體路徑問題)");
    } finally {
      setIsLoading(false);
    }
  };

  if (!roads) return <div>載入中或是資料遺失，請返回首頁...</div>;

  return (
    <div>
      {/* 頂部導航列 */}
      <div className="top-bar">
        <button className="topbar-button topbar-button-left" onClick={handleModify}>
          <div className="arrow-container">
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7v14z" />
            </svg>
          </div>
          修改檢查內容
        </button>
      </div>

      {/* 讀取遮罩 */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-message">正在產生 PDF 報告...</div>
        </div>
      )}

      <div className="result-container" style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? "none" : "auto" }}>
        
        {/* 左側邊欄：路名與功能區 */}
        <div className="sidebar">
          <h2>路名分頁</h2>
          <ul>
            {roadNames.map((roadName, idx) => {
              const fullRoadName = `${roadName}-${directions[idx]}`;
              return (
                <li
                  key={idx}
                  className={selectedRoad === fullRoadName ? "active" : ""}
                  onClick={() => setSelectedRoad(fullRoadName)}
                >
                  {fullRoadName}
                </li>
              );
            })}
          </ul>

          {/* 畫面篩選區 (只影響螢幕顯示) */}
          <div className="display-section">
            <h2>預覽篩選</h2>
            <div className="checkbox-container">
              <label>
                <input
                  type="checkbox"
                  checked={onlyNonCompliant}
                  onChange={() => setOnlyNonCompliant(!onlyNonCompliant)}
                />
                僅顯示風險項目
              </label>
            </div>
          </div>

          {/* 輸出下載區 (影響 PDF 內容) */}
          <div className="display-section">
            <h2>輸出報表</h2>
            <button className="output-button all" onClick={() => processQueue(false)} disabled={isLoading}>
              <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 16l4-5h-3V3h-2v8H8l4 5zm-8 2v2h16v-2H4z" />
              </svg>
              下載完整檢查結果
            </button>
            <button className="output-button problem" onClick={() => processQueue(true)} disabled={isLoading}>
              <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 16l4-5h-3V3h-2v8H8l4 5zm-8 2v2h16v-2H4z" />
              </svg>
              下載安全風險項目
            </button>
          </div>
        </div>

        {/* 右側：HTML 預覽表格 */}
        <div className="result-sheet-content">
          <div id="display-content">
            <div className="header-section">
              <h1 className="centered-title">檢查結果預覽</h1>
              <h2 className="centered-page-name">{currentPageName}</h2>
            </div>

            {groupedByRoadName[selectedRoad] && groupedByRoadName[selectedRoad].length > 0 ? (
              <table>
                 <colgroup>
                  <col style={{ width: "10%" }} />
                  <col style={{ width: "40%" }} />
                  <col style={{ width: "10%" }} />
                  <col style={{ width: "40%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>檢查代碼</th>
                    <th>檢查細項</th>
                    <th>選項</th>
                    <th>備註</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedByRoadName[selectedRoad].map((item, index) => {
                     // 解析 ID 與 取得原始資料
                     const parts = item.id.split("_");
                     const realId = parts[parts.length - 1]; // 例如 "OA-A01"
                     const checkItem = Object.values(CheckItems).flat().find((check) => check.id === realId);
                     const sheet = getSheetById(realId);
                     
                     // 判斷是否需要插入 Sheet 標題列 (例如 "OA 路段...")
                     const prevItem = groupedByRoadName[selectedRoad][index - 1];
                     const prevRealId = prevItem ? prevItem.id.split("_").pop() : null;
                     const isFirstInSheet = index === 0 || getSheetById(prevRealId) !== sheet;
                     
                     return (
                      <React.Fragment key={item.id}>
                        {/* Sheet 分隔標題 */}
                        {isFirstInSheet && (
                          <tr><td colSpan={4} style={{fontWeight: "bold", padding: "10px", backgroundColor: "#f9f9f9"}}>{tabNames[sheet]}</td></tr>
                        )}
                        
                        {/* 資料列 */}
                        <tr>
                           <td style={{textAlign: 'center'}}>{realId}</td>
                           <td className="description-cell">{checkItem?.description}</td>
                           <td style={{textAlign: 'center'}}>
                             {item.option}
                             {/* 風險項目的紅色星號標記 */}
                             {((item.option === "是" && checkItem?.asterisk === "yes") || 
                               (item.option === "否" && checkItem?.asterisk === "no")) && 
                               <span className="asterisk" style={{color: 'red'}}> ＊</span>}
                           </td>
                           <td style={{padding: "10px"}}>
                             {item.remark}
                             {/* 圖片預覽 */}
                             {Array.isArray(item.image) && item.image.length > 0 && (
                               <div style={{marginTop: '5px'}}>
                                 {item.image.map((src, i) => (
                                   <img key={i} src={src} alt="uploaded" style={{maxWidth: '150px', maxHeight: '150px', display: 'block', marginBottom: '5px'}} />
                                 ))}
                               </div>
                             )}
                           </td>
                        </tr>
                      </React.Fragment>
                     )
                  })}
                </tbody>
              </table>
            ) : (
              <p style={{textAlign: 'center', marginTop: '20px'}}>無符合條件的項目。</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;