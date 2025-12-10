import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { tabNames } from "../data/TabNames";

// --- 1. 註冊字體 ---
// 使用 process.env.PUBLIC_URL 確保在不同部署環境下都能找到路徑
Font.register({
  family: "NotoSansTC",
  src: process.env.PUBLIC_URL + "/fonts/NotoSansTC-Regular.ttf"
});
// 這個函式負責把每個字切開，中間塞入一個「大小為 1 的普通空白」
const renderText = (text) => {
  if (!text) return null;
  
  return text.split('').map((char, index) => (
    <React.Fragment key={index}>
      {char}
      {/* 使用一般空白 " "，但設為 fontSize: 0 讓它隱形且不佔空間 */}
      <Text style={{ fontSize: 1 }}> </Text>
    </React.Fragment>
  ));
};
// --- 2. 定義樣式 ---
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'NotoSansTC',
    fontSize: 10,
    lineHeight: 1.4, // 增加行高提升可讀性
  },
  
  // ================= 封面樣式 =================
  coverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  coverTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  separator: {
    width: '60%',
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    marginBottom: 30,
  },
  coverInfoContainer: {
    alignItems: 'flex-start',
    width: '60%',
  },
  coverInfoText: {
    fontSize: 14,
    marginBottom: 12,
  },

  // ================= 內容頁樣式 =================
  headerSection: {
    marginBottom: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    marginBottom: 2,
  },

  // ================= 表格樣式 (修正版) =================
  table: {
    display: "table",
    width: "auto",
    borderTopWidth: 1,      // 表格頂部邊框
    borderTopStyle: "solid",
    borderTopColor: "#000",
    marginTop: 10,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    alignItems: 'stretch',  // [關鍵] 讓整列的高度自動拉伸到跟最高的格子一樣 (解決文字切斷問題)
    minHeight: 25,
    borderBottomWidth: 1,   // 每一列底部畫線
    borderBottomStyle: "solid",
    borderBottomColor: "#000",
  },
  // 表頭儲存格
  tableColHeader: {
    backgroundColor: '#e0e0e0',
    borderLeftWidth: 1,     // 左邊框
    borderLeftStyle: "solid",
    borderLeftColor: "#000",
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center', // 表頭垂直置中
    fontSize: 11,
  },
  // 內容儲存格
  tableCol: {
    borderLeftWidth: 1,     // 左邊框
    borderLeftStyle: "solid",
    borderLeftColor: "#000",
    padding: 5,
    textAlign: 'left',      // [關鍵] 文字靠左，不要置中
    justifyContent: 'flex-start', // [關鍵] 內容從上方開始排 (預設)，允許向下延伸
    wrap: true,             // [關鍵] 允許自動換行
  },
  // 最後一欄專用 (補右邊框)
  tableColLast: {
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: "#000",
  },

  // ================= 欄位寬度設定 =================
  colCode: { width: '10%', textAlign: 'center' },
  colDesc: { width: '45%' },
  colOpt: { width: '10%', textAlign: 'center' },
  colRemark: { width: '35%' },

  // ================= 其他元件樣式 =================
  sheetHeader: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 11,
    borderLeftWidth: 1,
    borderLeftStyle: "solid",
    borderLeftColor: "#000",
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: "#000",
  },
  imageContainer: {
    marginTop: 5,
    flexDirection: 'column',
    gap: 5
  },
  uploadedImage: {
    width: 120, // 限制圖片顯示寬度
    height: 'auto',
    objectFit: 'contain',
    marginTop: 2,
    marginBottom: 2,
  },
  asterisk: {
    color: 'red',
    fontSize: 8,
  }
});

// --- 3. 建立 PDF 組件 ---
export const PDFReportDocument = ({ 
  groupedByRoadName, 
  CheckItems, 
  locationName, 
  onlyNonCompliant,
  inspector,
  selectedDate,
  weather
}) => {
  
  // 輔助函式：取得 Sheet 名稱 (例如 "OA", "OB")
  const getSheetById = (id) => {
    for (const sheet in CheckItems) {
      if (CheckItems[sheet].some((item) => item.id === id)) {
        return sheet;
      }
    }
    return null;
  };

  return (
    <Document>
      {/* ================= 第一頁：封面 ================= */}
      <Page size="A4" style={styles.page}>
        <View style={styles.coverContainer}>
           <Text style={styles.coverTitle}>道路安全檢查結果</Text>
           <View style={styles.separator} />
           
           <View style={styles.coverInfoContainer}>
              <Text style={styles.coverInfoText}>地點名稱：{locationName}</Text>
              <Text style={styles.coverInfoText}>填列人員：{inspector}</Text>
              <Text style={styles.coverInfoText}>填寫日期：{selectedDate ? selectedDate.replace("T", " ") : ""}</Text>
              <Text style={styles.coverInfoText}>天氣狀況：{weather}</Text>
              <Text style={styles.coverInfoText}>報告類型：{onlyNonCompliant ? "具安全風險之項目" : "完整檢查項目"}</Text>
           </View>
        </View>
      </Page>

      {/* ================= 後續頁面：各路段檢查表 ================= */}
      {Object.keys(groupedByRoadName).map((road, roadIndex) => {
        const items = groupedByRoadName[road];
        
        // 如果該路段沒有資料（例如篩選後為空），則不產生頁面
        if (items.length === 0) return null;

        return (
          <Page key={roadIndex} size="A4" style={styles.page}>
            {/* 頁面標題區 */}
            <View style={styles.headerSection}>
              <Text style={styles.title}>檢查結果</Text>
              <Text style={styles.subTitle}>   </Text>
              <Text style={styles.subTitle}>路段/路口方向：{road}</Text>
              
            </View>

            {/* 表格區 */}
            <View style={styles.table}>
              {/* 表頭 (設定 fixed 讓它在換頁時自動重複出現) */}
              <View style={styles.tableRow} fixed>
                <View style={[styles.tableColHeader, styles.colCode]}>
                  <Text>檢查代碼</Text>
                </View>
                <View style={[styles.tableColHeader, styles.colDesc]}>
                  <Text>檢查細項</Text>
                </View>
                <View style={[styles.tableColHeader, styles.colOpt]}>
                  <Text>選項</Text>
                </View>
                {/* 備註欄是最後一欄，加上 tableColLast 補右邊框 */}
                <View style={[styles.tableColHeader, styles.colRemark, styles.tableColLast]}>
                  <Text>備註</Text>
                </View>
              </View>

              {/* 表格內容 */}
              {items.map((item, index) => {
                const parts = item.id.split("_");
                const realId = parts[parts.length - 1];
                
                // 找原始資料
                const checkItem = Object.values(CheckItems).flat().find((check) => check.id === realId);
                const currentSheet = getSheetById(realId);
                
                // 判斷是否需要顯示 Sheet 分隔標題 (例如: OA, OB...)
                let showSheetHeader = false;
                if (index === 0) {
                  showSheetHeader = true;
                } else {
                  const prevParts = items[index - 1].id.split("_");
                  const prevRealId = prevParts[prevParts.length - 1];
                  const prevSheet = getSheetById(prevRealId);
                  if (prevSheet !== currentSheet) {
                    showSheetHeader = true;
                  }
                }
                
                // 判斷是否需要紅色星號
                const showAsterisk = (item.option === "是" && checkItem?.asterisk === "yes") || 
                                     (item.option === "否" && checkItem?.asterisk === "no");

                return (
                  <React.Fragment key={index}>
                    {/* Sheet 分隔列 */}
                    {showSheetHeader && (
                      <View style={styles.tableRow} wrap={false}>
                        <View style={[styles.sheetHeader, { width: '100%' }]}>
                          <Text>{tabNames[currentSheet] || currentSheet}</Text>
                        </View>
                      </View>
                    )}

                    {/* 資料列 */}
                    {/* wrap={false} 建議設定為 false，若單行內容過長，會整行移到下一頁，避免文字被腰斬 */}
                    <View style={styles.tableRow} wrap={false}> 
                      
                      {/* 1. 代碼 */}
                      <View style={[styles.tableCol, styles.colCode]}>
                        <Text>{realId}</Text>
                      </View>
                      
                      {/* 2. 細項 (允許換行) */}
                      <View style={[styles.tableCol, styles.colDesc]}>
                        <Text>{renderText(checkItem?.description || "")}</Text>
                      </View>
                      
                      {/* 3. 選項 */}
                      <View style={[styles.tableCol, styles.colOpt]}>
                        <Text>
                          {item.option} 
                          {showAsterisk && <Text style={styles.asterisk}> *</Text>}
                        </Text>
                      </View>
                      
                      {/* 4. 備註與圖片 (最後一欄補右邊框) */}
                      <View style={[styles.tableCol, styles.colRemark, styles.tableColLast]}>
                        <Text>{renderText(item.remark || "")}</Text>
                        
                        {/* 圖片顯示區塊 (加入防呆) */}
                        {item.image && item.image.length > 0 && (
                          <View style={styles.imageContainer}>
                            {item.image.map((imgSrc, imgIdx) => {
                              if (!imgSrc || typeof imgSrc !== 'string') return null;
                              return (
                                <Image 
                                  key={imgIdx} 
                                  src={imgSrc} 
                                  style={styles.uploadedImage} 
                                />
                              );
                            })}
                          </View>
                        )}
                      </View>
                    </View>
                  </React.Fragment>
                );
              })}
            </View>
          </Page>
        );
      })}
    </Document>
  );
};