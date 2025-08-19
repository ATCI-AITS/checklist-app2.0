const CheckItems = {
  OA: [
    {
      id: "OA-A01",
      description:
        "路段路側若有產生大量車輛交通的設施，如醫院、購物中心、加油站等，道路層級是否合適？",
      asterisk: "no",
    },
    {
      id: "OA-A02",
      description:
        "路段路側若有產生大量行人交通的設施，如學校、購物中心等，是否有連續性的步道互相連通？",
      asterisk: "no",
    },
    {
      id: "OA-A03",
      description:
        "路段路側若有產生大量自行車交通的設施，如工業區、學校、購物中心等，是否有連續性的自行車路網連接？",
      asterisk: "no",
    },
    {
      id: "OA-A04",
      description: "路段路側若為商業區，道路是否負擔穿越性交通？",
      asterisk: "yes",
    },
    {
      id: "OA-A05",
      description:
        "路段路側若為商業區，路側是否視野清楚，以減少穿越性交通對用路人造成的危險？",
      asterisk: "no",
    },
    {
      id: "OA-A06",
      description: "路段路側若為商業區，是否有足夠的路外空間供貨物裝卸？",
      asterisk: "no",
    },
    {
      id: "OA-A07",
      description: "路段路側若為商業區，是否提供足夠的路邊或路外停車空間？",
      asterisk: "no",
    },
    {
      id: "OA-A08",
      description: "路段路側土地使用是否造成大量行人穿越主次要道路？",
      asterisk: "yes",
    },
    {
      id: "OA-A09",
      description:
        "路段路側若為住宅區，是否有基本服務設施，如地方區商店、小學等以減少旅次？",
      asterisk: "no",
    },
    {
      id: "OA-B03",
      description: "路段幹線道之路口間隔是否至少250公尺以上？",
      asterisk: "no",
    },
    {
      id: "OA-B04",
      description: "路段地方道路是否設計成不適合穿越性交通使用？",
      asterisk: "yes",
    },
    {
      id: "OA-B05",
      description: "路段地方道路是否降低車速，並給與行人優先權？",
      asterisk: "no",
    },
    {
      id: "OA-C01",
      description:
        "路段路邊有民生活動（如商店或公園等）設施時，車道速限是否50 km/h以下，並以標誌或標字提示？",
      asterisk: "no",
    },
    {
      id: "OA-C02",
      description:
        "路段路邊環境為社區道路時，車道速限是否30 km/h以下，並以標誌或標字提示？",
      asterisk: "no",
    },
    {
      id: "OA-C03",
      description: "路段最高速限標誌（限5）是否設置？",
      asterisk: "no",
    },
    { id: "OA-C04", 
      description: "路段車輛行駛速度是否恰當？", 
      asterisk: "no" 
    },
    { id: "OA-D01", 
      description: "路段交通流量是否龐大？", asterisk: "yes" 
    },
    {
      id: "OA-D02",
      description:
        "路段車流交織情形（包含大型車、小型車、機慢車等相互交織情形）是否嚴重？",
      asterisk: "yes",
    },
    {
      id: "OA-D05",
      description: "路段沿街行人流量是否過大？",
      asterisk: "yes",
    },
    { id: "OA-D06",
      description: "路段大型車交通量過大？",
      asterisk: "yes" 
    },
    { id: "OA-D07", 
      description: "路段機慢車交通量過大？", 
      asterisk: "yes" 
    },
    {
      id: "OA-E08",
      description: "路段機動車輛是否可見沿路行進的自行車或行人？",
      asterisk: "no",
    },
    {
      id: "OA-E09",
      description: "路段路邊停車是否影響視距？",
      asterisk: "yes",
    },
    {
      id: "OA-E10",
      description: "路段汽機車停車位之位置不安全，缺乏視距",
      asterisk: "yes",
    },
    {
      id: "OA-E11",
      description: "路段在行人、直行車與機動車輛之間是否確保彼此互視？",
      asterisk: "no",
    },
    {
      id: "OA-E12",
      description:
        "路段路側障礙物（行道樹、設施桿件、路燈及路霸等）或建物是否影響視線？",
      asterisk: "yes",
    },
    {
      id: "OA-E13",
      description:
        "路段對於障礙物（行道樹、設施桿件、槽化島、停止之車輛、陸橋橋墩等）之視線是否足夠及清楚？",
      asterisk: "no",
    },
    {
      id: "OA-F01",
      description: "路段道路幾何設計要素之結合是否符合一致性及安全的線形？",
      asterisk: "no",
    },
    {
      id: "OA-F02",
      description: "路段彎道平曲線半徑是否適當？",
      asterisk: "no",
    },
    {
      id: "OA-F03",
      description: "路段彎道平曲線長度是否適當？",
      asterisk: "no",
    },
    { id: "OA-F04", 
      description: "路段彎道超高是否適當？", 
      asterisk: "no" 
    },
    {
      id: "OA-F05",
      description:
        "路段彎道之曲線半徑、超高是否符合預估車輛實際行車速率之最低要求？",
      asterisk: "no",
    },
    {
      id: "OA-F06",
      description: "路段道路線形的設計是否允許正常的超車行為？",
      asterisk: "no",
    },
    {
      id: "OA-F07",
      description:
        "路段當最短超車視距不足時（例如：等於或小於下列數值時），即應設立不准超車區段",
      asterisk: "yes",
    },
    {
      id: "OA-F08",
      description:
        "路段之路型配置（包含車道數、停車空間、行人空間及分隔設施等）是否適當？",
      asterisk: "no",
    },
    {
      id: "OA-F09",
      description:
        "路段道路橫斷面設計是否包含適當之路肩或停車空間，以提供故障車輛、公車等使用？",
      asterisk: "no",
    },
    {
      id: "OA-F15",
      description: "路段車道寬度對於道路設計速率及設計車種是否合適？",
      asterisk: "no",
    },
    {
      id: "OA-F16",
      description: "路段單行道未滿足單行道可例外允許機車雙向行駛之條件。",
      asterisk: "yes",
    },
    {
      id: "OA-F18",
      description: "路段上若有慢車道，其寬度是否小於2.8公尺？",
      asterisk: "no",
    },
    { id: "OA-F20", description: "路段機車導引缺乏連續性", asterisk: "yes" },
    {
      id: "OA-F21",
      description: "路段機車可行駛空間（車道）寬度不合適或不安全",
      asterisk: "yes",
    },
    { id: "OA-F22", description: "路段機車專用道寬度合適", asterisk: "no" },
    { id: "OA-F23", description: "路段機慢車道寬度合適", asterisk: "no" },
    { id: "OA-F24", description: "路段混合車道寬度不合適", asterisk: "yes" },
    {
      id: "OA-F25",
      description:
        "路段機車可行駛空間（車道）尺寸未視情況增減，例如路網中某一路段具特殊功能之重要性之時。",
      asterisk: "yes",
    },
    {
      id: "OA-F26",
      description: "路段機車可行駛空間（車道）尺寸未依（預期）交通量調整。",
      asterisk: "yes",
    },
    {
      id: "OA-F27",
      description: "路段車道寬度對於機車（自行車）是否合適？",
      asterisk: "no",
    },
    {
      id: "OA-F28",
      description: "路段車道寬度及轉彎路徑可以滿足設計車種的需求？",
      asterisk: "no",
    },
    {
      id: "OA-F34",
      description:
        "路段車道是否有明顯之分隔設計（分隔島或標線）？（包含快車道、慢車道、機車道或自行車道等）",
      asterisk: "no",
    },

    { id: "OA-G01", description: "路段是否有照明設施？", asterisk: "no" },
    {
      id: "OA-G02",
      description: "路段照明設備之設置位置、間距或高度是否適當？",
      asterisk: "no",
    },
    {
      id: "OA-G03",
      description: "路段照明狀況是否足以描繪出行人和其他車輛之輪廓？",
      asterisk: "no",
    },
    {
      id: "OA-G04",
      description: "路段固定式照明是否干擾判別標誌或道路線形？",
      asterisk: "yes",
    },
    {
      id: "OA-G05",
      description: "路段照明設備是否良好？（包含燈泡無損壞、亮度足夠等）",
      asterisk: "no",
    },
    {
      id: "OA-G06",
      description: "路段照明設備開啟時段是否恰當？",
      asterisk: "no",
    },
    {
      id: "OA-H01",
      description:
        "路段路面排水功能是否良好？（路面之路拱與坡度設計是否可有效排水，避免路面積水？）",
      asterisk: "no",
    },
    {
      id: "OA-H02",
      description: "路段排水溝的功能是否正常運作？",
      asterisk: "no",
    },
    {
      id: "OA-H03",
      description:
        "路段標線於雨天時是否易打滑？（網狀線劃設過密、標線防滑材質不佳皆可能造成車輛打滑）",
      asterisk: "yes",
    },
    {
      id: "OA-H04",
      description: "路段路面是否良好？（路面無破損、凹凸不平或磨損至光滑）",
      asterisk: "no",
    },
    {
      id: "OA-H05",
      description:
        "路段路面是否有雜物影響行駛？（路面散砂、碎石、油渣、破輪胎、落葉或路霸等）",
      asterisk: "yes",
    },

    {
      id: "OA-I01",
      description:
        "路段標誌設置是否無欠缺？路段標誌標示內容是否適當？",
      asterisk: "no",
    },
    {
      id: "OA-I02",
      description:
        "路段標誌和標線是否沒有任何的矛盾？",
      asterisk: "no",
    },
    {
      id: "OA-I03",
      description:
        "路段標誌佈設位置是否適當，使駕駛者有足夠時間採取適當及安全的反應動作？",
      asterisk: "no",
    },
    {
      id: "OA-I04",
      description:
        "路段標誌是否有反光或夜間照明？白天或黑夜，標誌的能見度是否足夠？",
      asterisk: "no",
    },
    {
      id: "OA-I09",
      description: "路段彎道是否設置警告標誌？（包含彎路標誌或連續彎路標誌）",
      asterisk: "no",
    },
    {
      id: "OA-I10",
      description:
        "路段彎道之警告標誌位置是否適當？（考量設計速率與平曲線半徑所配合之安全停車視距之前）",
      asterisk: "no",
    },
    {
      id: "OA-I11",
      description: "路段彎道是否設置安全方向導引標誌（輔2）？",
      asterisk: "no",
    },
    {
      id: "OA-I12",
      description: "路段標誌是否未視情況設置於車行方向兩側？",
      asterisk: "yes",
    },
    {
      id: "OA-I16",
      description:
        "路段行人及自行車專用標誌是否未依照實際人行道及自行車專用道之空間分布情形設置？",
      asterisk: "yes",
    },
    {
      id: "OA-I17",
      description: "路段舊的標誌是否有清除乾淨？",
      asterisk: "no",
    },

    {
      id: "OA-J01",
      description:
        "路段標線是否清晰且正確？",
      asterisk: "no",
    },
    {
      id: "OA-J02",
      description: "路段標線劃設是否適當且連續？（包含路面邊線、車道線、分向限制線、禁止超車線、禁止變換車道線、禁止停車線及禁止臨時停車線）\n路段相關標線劃設之組合配置是否適當？（如配合路口路型之槽化線、車道線等相關標線之組合是否考量行車軌跡）",
      asterisk: "no",
    },
    {
      id: "OA-J03",
      description: "路段標誌和標線是否沒有任何的矛盾？",
      asterisk: "no",
    },
    {
      id: "OA-J04",
      description: "路段禁止變換車道線是否劃設適當且長度是否足夠？",
      asterisk: "no",
    },
    {
      id: "OA-J05",
      description: "路段禁止超車線是否劃設適當且長度是否足夠？",
      asterisk: "no",
    },
    {
      id: "OA-J06",
      description: "路段彎道是否劃設禁止超車線及禁止變換車道線？",
      asterisk: "no",
    },
    { id: "OA-J30", description: "路段路面標記是否明顯可辨？", asterisk: "no" },
    {
      id: "OA-J31",
      description: "路段路寬變化大是否設置反光導標或危險標記？",
      asterisk: "no",
    },
    {
      id: "OA-J32",
      description: "路段彎道是否設置反光導標或危險標記？",
      asterisk: "no",
    },
    {
      id: "OA-J34",
      description: "路段槽化島、護欄或障礙物體等結構物之反光或辨識是否良好？",
      asterisk: "no",
    },
    {
      id: "OA-J35",
      description: "路段舊的標線是否有清除乾淨（舊標線殘留）？",
      asterisk: "no",
    },

    {
      id: "OA-L01",
      description: "路段有汽機車停車需求時，是否有停車設施？其尺寸是否適當？",
      asterisk: "no",
    },
    {
      id: "OA-L02",
      description:
        "路段停車格位或允許停車路段的設置是否適當？（若允許停車時，其距離應避免與路口過近）\n路段對於車輛之停車（包括機車、公車）是否提供適當地點，以避免對其他道路使用人造成危險？",
      asterisk: "no",
    },
    {
      id: "OA-L03",
      description:
        "路段進出停車位之車輛與車道車流之衝突是否影響甚微？\n路段路邊停車的安排是否安全？（平行、對角或垂直）",
      asterisk: "no",
    },
    {
      id: "OA-L04",
      description:
        "路段若機車停車位須由人行道進出，剩餘人行寬度是否足夠？停放之機車是否不影響行人通行？",
      asterisk: "no",
    },
    {
      id: "OA-L05",
      description:
        "停車空間是否可與其他空間（例如人行道或自行車道）區別？",
      asterisk: "no",
    },
    {
      id: "OA-L06",
      description:
        "路段若騎樓開放機車停車，剩餘人行寬度是否足夠？停放之機車是否不影響行人通行？",
      asterisk: "no",
    },
    {
      id: "OA-L07",
      description: "路段禁止停車或禁止臨時停車的標線畫設是否適當？",
      asterisk: "no",
    },
    {
      id: "OA-L09",
      description: "路段違規停車情形是否嚴重？",
      asterisk: "yes",
    },
    {
      id: "OA-L10",
      description: "路段停車位與車道之橫向淨距是否足夠？",
      asterisk: "no",
    },
    {
      id: "OA-L11",
      description: "路段行駛機車與路邊停放車輛之側向淨間距未能確保",
      asterisk: "yes",
    },
    {
      id: "OA-L12",
      description: "路段存在機車與臨停或裝卸車輛發生碰撞之可能性",
      asterisk: "yes",
    },
    {
      id: "OA-L13",
      description:
        "路段機車停車格與車行道間是否保留緩衝空間？尤其是機車車頭朝外停放時。",
      asterisk: "no",
    },
    {
      id: "OA-L14",
      description: "路段機車停車格是否規範車頭或車尾朝外？",
      asterisk: "no",
    },
    {
      id: "OA-L15",
      description: "路段機車停車格規範車頭或車尾朝外時，是否有標示？",
      asterisk: "no",
    },
    {
      id: "OA-L16",
      description: "路段機車停車格緊鄰輕軌列車行駛空間。",
      asterisk: "yes",
    },
    {
      id: "OA-L17",
      description: "路段機車停車格存在違規使用情形（被其他車種停放等）。",
      asterisk: "yes",
    },
    {
      id: "OA-L18",
      description: "路段機車停車需求是否滿足？應同時考量小型車停車需求。",
      asterisk: "no",
    },
    {
      id: "OA-L19",
      description: "路段沿街設置的機車停車彎連續設置，未中斷以利行人穿越。",
      asterisk: "yes",
    },

    {
      id: "OA-N01",
      description:
        "路段道路相關設施（包含號誌桿、標誌桿、路燈、電桿、號誌控制箱及電力箱等設施）之位置是否適當？",
      asterisk: "no",
    },
    {
      id: "OA-N02",
      description:
        "路段道路固定物（包含分隔島鼻端、高架橋墩、行人天橋墩及固定物佇立於道路上者）之位置是否適當？",
      asterisk: "no",
    },
    {
      id: "OA-N03",
      description:
        "路段道路相關設施（包含號誌桿、標誌桿、路燈、電桿、號誌控制箱及電力箱等設施）是否有保護措施？",
      asterisk: "no",
    },
    {
      id: "OA-N04",
      description:
        "道路固定物（包含分隔島鼻端、高架橋墩、行人天橋敦及固定物佇立於道路上者）是否有保護措施？",
      asterisk: "no",
    },
    {
      id: "OA-N05",
      description:
        "路段靠右(左)行駛或分道標誌是否未位於分隔島或庇護島頭之前端？",
      asterisk: "yes",
    },
    {
      id: "OA-N06",
      description:
        "路段道路安全護欄是否安全的被裝設，使它們本身不為障礙物？",
      asterisk: "no",
    },
    {
      id: "OA-N07",
      description:
        "護欄的長度是否足夠？護欄是否正確安裝（端部處理、固定處、柱間距、柱深、重疊）？",
      asterisk: "no",
    },
    {
      id: "OA-N08",
      description:
        "路段號誌桿、標誌桿、路燈桿及電桿等相關設施是否貼反光標紙或相關反光設施？",
      asterisk: "no",
    },
    {
      id: "OA-N09",
      description: "路段道路淨高是否不足？（一般車道最小淨高為4.6 公尺）",
      asterisk: "yes",
    },

    {
      id: "OA-O01",
      description:
        "路段對於行人沿道路步行是否提供適當之安全設施（人行道、步道、行人專用道、欄杆等）？\n路段人行道是否有使用路緣石、柵欄或植栽隔開？是否有扶手或圍欄來確保行人的安全？",
      asterisk: "no",
    },

    {
      id: "OA-P01",
      description:
        "路段對於自行車及非機動化之交通是否提供適當之專用道或安全保護設施？（專用道或隔離設施）",
      asterisk: "no",
    },
    {
      id: "OA-P02",
      description: "路段自行車停車設施是否妨礙行人或車輛交通？",
      asterisk: "yes",
    },

    {
      id: "OA-Q01",
      description:
        "路段公車站是否以人行步道與住宅區及鄰近的服務設施（如商店）連通？",
      asterisk: "no",
    },
    {
      id: "OA-Q02",
      description: "路段合適的公車或副大眾運輸之停靠站是否位於安全的位置？",
      asterisk: "no",
    },

    {
      id: "OA-R01",
      description:
        "路段駕駛者在使用車道類別時，是否可掌握足夠的資訊？（有車道指示標誌、路面方向箭頭或路面標字等設施）",
      asterisk: "no",
    },
    {
      id: "OA-R02",
      description: "路段駕駛者是否受標誌牌面過多、號誌位置不當影響其注意力？",
      asterisk: "yes",
    },
    {
      id: "OA-R03",
      description:
        "路段駕駛者是否受道路環境影響其注意力？（如廣告牌、行道樹等影響）",
      asterisk: "yes",
    },
    {
      id: "OA-R04",
      description:
        "路段背景是否有任何問題，影響標誌的可見度？",
      asterisk: "yes",
    },
    {
      id: "OA-R05",
      description:
        "路段綠化和植栽是否對用路人造成困擾（例如道路線形）？\n路段路邊植栽是否會導致駕駛者持續往曲線方向行駛？",
      asterisk: "yes",
    },
    {
      id: "OA-R06",
      description: "路段逆向行駛車流是否很大？（尤其是機車逆向）",
      asterisk: "yes",
    },
  ],
  OB: [
    {
      id: "OB-B06",
      description: "臨近路口駕駛人所必須做的判斷決策是否依照邏輯、清楚的順序？",
      asterisk: "no",
    },
    {
      id: "OB-E01",
      description:
        "臨近路口駕駛人行經路口前，是否能識別前方交岔路口？",
      asterisk: "no",
    },
    {
      id: "OB-E02",
      description:
        "臨近路口若位於道路轉彎處時，其視線是否良好？",
      asterisk: "no",
    },
    {
      id: "OB-E03",
      description:
        "臨近路口或路段為下（上）坡或連續上（下）坡，其視線（坡度過陡或緩和曲線長度不足，而看不清楚路口狀況）是否良好？",
      asterisk: "no",
    },
    {
      id: "OB-F08",
      description:
        "臨近路口之路型配置（包含車道數、停車空間、行人空間及分隔設施等）是否適當？",
      asterisk: "no",
    },
    {
      id: "OB-F09",
      description:
        "臨近路口道路橫斷面設計是否包含適當之路肩或停車空間，以提供故障車輛、公車等使用？",
      asterisk: "no",
    },
    {
      id: "OB-F10",
      description:
        "臨近路口停止線上游50公尺內是否有慢車道、機車專用道或優先道干擾轉向車流？",
      asterisk: "yes",
    },
    {
      id: "OB-F11",
      description:
        "單向二車道以上的臨近路口，內側車道行向配置是否與上游車道行向配置一致？",
      asterisk: "no",
    },
    {
      id: "OB-F12",
      description:
        "臨近路口內側車道是否直接變為左轉車道，無設置任何漸變措施或標誌提醒？",
      asterisk: "yes",
    },
    {
      id: "OB-F13",
      description:
        "單向二車道以上的臨近路口，外側車道行向配置是否與上游車道行向配置一致？",
      asterisk: "no",
    },
    {
      id: "OB-F14",
      description:
        "臨近路口外側車道是否直接變為右轉車道，無設置任何漸變措施或標誌提醒？",
      asterisk: "yes",
    },
    {
      id: "OB-F15",
      description: "臨近路口車道寬度對於道路設計速率及設計車種是否合適？",
      asterisk: "no",
    },
    {
      id: "OB-F17",
      description:
        "臨近路口停止線上游30公尺內路肩是否小於1公尺，避免被誤用為慢車道？",
      asterisk: "no",
    },
    {
      id: "OB-F19",
      description: "臨近路口停止線上游60公尺處，其慢車道寬度是否小於2.8公尺？",
      asterisk: "no",
    },
    {
      id: "OB-F20",
      description: "臨近路口機車導引缺乏連續性。",
      asterisk: "yes",
    },
    {
      id: "OB-F21",
      description: "臨近路口機車可行駛空間（車道）寬度不合適或不安全。",
      asterisk: "yes",
    },
    {
      id: "OB-F29",
      description: "臨近路口車輛欲左轉時，是否未能提前緊靠車行道左側？",
      asterisk: "yes",
    },
    {
      id: "OB-F30",
      description: "臨近路口車輛欲右轉時，是否未能提前緊靠車行道右側？",
      asterisk: "yes",
    },
    {
      id: "OB-F36",
      description:
        "臨近路口停止線30公尺內是否有停車場或巷道出入口、公車停靠區、路邊停車格？",
      asterisk: "yes",
    },
    {
      id: "OB-F37",
      description:
        "臨近路口若為同向分隔島之路型，臨近路口30公尺內是否有車流匯入或匯出的缺口？",
      asterisk: "yes",
    },
    {
      id: "OB-J01",
      description:
        "臨近路口標線是否清晰且正確？",
      asterisk: "no",
    },
    {
      id: "OB-J02",
      description:
        "臨近路口標線劃設是否適當且連續？（包含路面邊線、車道線、分向限制線、禁止超車線、禁止變換車道線、禁止停車線及禁止臨時停車線）\n臨近路口相關標線劃設之組合配置是否適當？（如配合路口路型之槽化線、車道線等相關標線之組合是否考量行車軌跡）",
      asterisk: "no",
    },
    {
      id: "OB-J03",
      description: "臨近路口標誌和標線是否沒有任何的矛盾？",
      asterisk: "no",
    },
    {
      id: "OB-J04",
      description: "臨近路口禁止變換車道線是否劃設適當且長度是否足夠？",
      asterisk: "no",
    },
    {
      id: "OB-J05",
      description: "臨近路口禁止超車線是否劃設適當且長度是否足夠？",
      asterisk: "no",
    },
    {
      id: "OB-K05",
      description:
        "臨近路口號誌燈面是否足供管制之臨近路口各車道，於臨近路口上游15公尺處清楚辨識？",
      asterisk: "no",
    },
    {
      id: "OB-K06",
      description:
        "臨近路口燈面是否面向管制的臨近路口，且於臨近路口上游30公尺處不會誤看其他臨近路口的燈面干擾？",
      asterisk: "no",
    },
    {
      id: "OB-L01",
      description:
        "臨近路口有汽機車停車需求時，是否有停車設施？其尺寸是否適當？",
      asterisk: "no",
    },
    {
      id: "OB-L02",
      description: "臨近路口停車格位或允許停車路段的設置是否適當？（若允許停車時，其距離應避免與路口過近）\n臨近路口對於車輛之停車（包括機車、公車）是否提供適當地點，以避免對其他道路使用人造成危險？",
      asterisk: "no",
    },
    {
      id: "OB-L03",
      description: "臨近路口進出停車位之車輛與車道車流之衝突是否影響甚微？\n臨近路口路邊停車的安排是否安全？（平行、對角或垂直）",
      asterisk: "no",
    },
    {
      id: "OB-L04",
      description:
        "臨近路口若機車停車位須由人行道進出，剩餘人行寬度是否足夠？停放之機車是否不影響行人通行？",
      asterisk: "no",
    },
    {
      id: "OB-L05",
      description:
        "停車空間是否可與其他空間（例如人行道或自行車道）區別？",
      asterisk: "no",
    },
    {
      id: "OB-L06",
      description:
        "臨近路口若騎樓開放機車停車，剩餘人行寬度是否足夠？停放之機車是否不影響行人通行？",
      asterisk: "no",
    },
    {
      id: "OB-L07",
      description: "臨近路口禁止停車或禁止臨時停車的標線畫設是否適當？",
      asterisk: "no",
    },
    {
      id: "OB-L08",
      description: "臨近路口停止線上游10公尺內是否有繪製禁止臨時停車線？",
      asterisk: "no",
    },
    {
      id: "OB-L09",
      description: "臨近路口違規停車情形是否嚴重？",
      asterisk: "yes",
    },
    {
      id: "OB-L10",
      description: "臨近路口停車位與車道之橫向淨距是否足夠？",
      asterisk: "no",
    },
    {
      id: "OB-L11",
      description: "臨近路口行駛機車與路邊停放車輛之側向淨間距未能確保",
      asterisk: "yes",
    },
    {
      id: "OB-L12",
      description: "臨近路口存在機車與臨停或裝卸車輛發生碰撞之可能性",
      asterisk: "yes",
    },
    {
      id: "OB-L13",
      description:
        "臨近路口機車停車格與車行道間是否保留緩衝空間？尤其是機車車頭朝外停放時。",
      asterisk: "no",
    },
    {
      id: "OB-L14",
      description:
        "臨近路口機車停車格是否規範車頭或車尾朝外？",
      asterisk: "no",
    },
    {
      id: "OB-L15",
      description: "臨近路口機車停車格規範車頭或車尾朝外時，是否有標示？",
      asterisk: "no",
    },
    {
      id: "OB-L16",
      description: "臨近路口機車停車格緊鄰輕軌列車行駛空間。",
      asterisk: "yes",
    },
    {
      id: "OB-L17",
      description: "臨近路口機車停車格存在違規使用情形（被其他車種停放等）。",
      asterisk: "yes",
    },
    {
      id: "OB-L18",
      description: "臨近路口機車停車需求是否滿足？應同時考量小型車停車需求。",
      asterisk: "no",
    },
    {
      id: "OB-M01",
      description:
        "臨近路口有左轉需求時，是否設置左轉專用道？",
      asterisk: "no",
    },
    {
      id: "OB-M02",
      description:
        "左轉車道配置，於尖峰時段是否足夠容納臨近路口的左轉彎車流？",
      asterisk: "no",
    },
    {
      id: "OB-M03",
      description: "左轉專用道漸變段起、迄點之變化及長度是否適當？",
      asterisk: "no",
    },
    {
      id: "OB-M13",
      description:
        "臨近路口有右轉需求時，是否設置右轉專用道？",
      asterisk: "no",
    },
    {
      id: "OB-M14",
      description:
        "右轉車道配置，於尖峰時段是否足夠容納臨近路口的右轉彎車流？",
      asterisk: "no",
    },
    {
      id: "OB-M15",
      description: "臨近路口右轉專用道漸變段起、迄點之變化及長度是否適當？",
      asterisk: "no",
    },
    {
      id: "OB-M22",
      description:
        "臨近路口單向三車道以上，其上游是否有輔1標誌與車道指向線導引、且輔1內容符合車道行向安排並明確可視？",
      asterisk: "no",
    },
    {
      id: "OB-Q03",
      description:
        "臨近路口公車站是否太靠近行人穿越道及交岔路口停止線，以致公車的停靠阻礙車輛之視線，造成行人之危險？",
      asterisk: "yes",
    },
    {
      id: "OB-R02",
      description: "臨近路口駕駛者是否受標誌牌面過多、號誌位置不當影響其注意力？",
      asterisk: "yes",
    },
    {
      id: "OB-R03",
      description:
        "臨近路口駕駛者是否受道路環境影響其注意力？（如廣告牌、行道樹等影響）",
      asterisk: "yes",
    },
    {
      id: "OB-R04",
      description:
        "臨近路口背景是否有任何問題，影響標誌的可見度？",
      asterisk: "yes",
    },
    {
      id: "OB-R05",
      description:
        "臨近路口綠化和植栽是否對用路人造成困擾（例如道路線形）？\n臨近路口路邊植栽是否會導致駕駛者持續往曲線方向行駛？",
      asterisk: "yes",
    },
  ],
  OC: [
    {
      id: "OC-B01",
      description: "道路僅與其相同等級、上一等級或下一等級之街道相交？",
      asterisk: "no",
    },
    {
      id: "OC-B02",
      description:
        "路口幹線道與集散道路相交之路口有否考慮槽化，以引導轉向車輛穿越主要車流？",
      asterisk: "no",
    },
    { id: "OC-D01", description: "路口交通流量是否龐大？", asterisk: "yes" },
    {
      id: "OC-D02",
      description:
        "路口車流交織情形（包含大型車、小型車、機慢車等相互交織情形）是否嚴重？",
      asterisk: "yes",
    },
    {
      id: "OC-D03",
      description: "路口左轉的車流量是否過大？",
      asterisk: "yes",
    },
    {
      id: "OC-D04",
      description: "路口右轉的車流量是否過大？",
      asterisk: "yes",
    },
    {
      id: "OC-D05",
      description: "路口穿越行人流量是否過大？",
      asterisk: "yes",
    },
    { id: "OC-D06", description: "路口大型車交通量過大", asterisk: "yes" },
    { id: "OC-D07", description: "路口機慢車交通量過大", asterisk: "yes" },
    {
      id: "OC-E04",
      description:
        "路口左轉車輛是否受對向左轉車輛的阻礙而無法看清對向直行車流？",
      asterisk: "yes",
    },
    {
      id: "OC-E05",
      description:
        "路口設置有「停」標線（標誌）或閃光紅燈的支線道，位於距幹線道路緣或路面邊線延伸線上游5公尺的位置，往橫交幹線道左右方向（Dr）公尺的視距三角內，是否有障礙物或建物遮蔽？",
      asterisk: "yes",
    },
    {
      id: "OC-E06",
      description:
        "路口設置有「停」標線（標誌）或閃光紅燈的支線道，以E05項次檢查左右視距被遮蔽時，若已設置反光鏡輔助，反光鏡設置位置是否適當，是否能見衝突車流？",
      asterisk: "no",
    },
    {
      id: "OC-E07",
      description:
        "設置有「讓」標線（標誌）的非行車管制號誌路口，位於距交叉口最短停車視距（Ss）___公尺的位置，往橫交主次要道路（幹線道）左右方向（Dy）___公尺的視距三角內，是否有障礙物或建物遮蔽？",
      asterisk: "yes",
    },
    {
      id: "OC-E09",
      description: "路口路邊停車是否影響行車視距？",
      asterisk: "yes",
    },
    {
      id: "OC-E10",
      description: "路口汽機車停車位之位置不安全，缺乏視距",
      asterisk: "yes",
    },
    {
      id: "OC-E11",
      description: "路口在行人、自行車與機動車輛之間是否確保彼此互視？",
      asterisk: "no",
    },
    {
      id: "OC-E12",
      description:
        "路口路側障礙物（行道樹、設施桿件、路燈等）或建物是否影響視線？",
      asterisk: "yes",
    },
    {
      id: "OC-E13",
      description:
        "路口對於障礙物（行道樹、設施桿件、槽化島、停止之車輛、陸橋橋墩等）之視線是否足夠及清楚？",
      asterisk: "no",
    },
    {
      id: "OC-F01",
      description: "路口道路幾何設計要素之結合是否符合一致性及安全的線形？",
      asterisk: "no",
    },
    { id: "OC-F20", description: "路口機車導引缺乏連續性", asterisk: "yes" },
    {
      id: "OC-F32",
      description:
        "路口直行通過交叉口的車道，與離開路口對應的車道是否有橫向偏移？",
      asterisk: "yes",
    },
    {
      id: "OC-F33",
      description: "路口及離開路口處的機車導引型式變更且缺少安全漸變或導引。",
      asterisk: "yes",
    },
    {
      id: "OC-F35",
      description: "路口槽化島設計是否適當？（包含位置、形狀及大小等）",
      asterisk: "no",
    },
    {
      id: "OC-F38",
      description: "交叉口內是否有加油站、停車場或大樓等出入口？",
      asterisk: "yes",
    },
    { id: "OC-F39", description: "交岔路口超過四支交岔？", asterisk: "yes" },
    { id: "OC-F40", description: "交岔路口交角是否小於60度？", asterisk: "yes" },
    {
      id: "OC-F41",
      description:
        "路口考量行穿線、庇護島、停止線前待轉區、與設計車種轉彎需求後，停止線是否已盡量接近交叉口？",
      asterisk: "no",
    },
    {
      id: "OC-F42",
      description:
        "非正交（多岔或斜交）交岔路口，路口與交叉口內是否有導引不同行向車流的設計（如槽化或導引線）？",
      asterisk: "no",
    },
    { id: "OC-G01", description: "路口是否有照明設施？", asterisk: "no" },
    {
      id: "OC-G02",
      description: "路口照明設備之設置位置、間距或高度是否適當？",
      asterisk: "no",
    },
    {
      id: "OC-G03",
      description: "路口照明狀況是否足以描繪出行人和其他車輛之輪廓？",
      asterisk: "no",
    },
    {
      id: "OC-G04",
      description: "路口固定式照明是否干擾判別標誌或道路線形？",
      asterisk: "yes",
    },
    {
      id: "OC-G05",
      description: "路口照明設備是否良好？（包含燈泡無損壞、亮度足夠等）",
      asterisk: "no",
    },
    {
      id: "OC-G06",
      description: "路口照明設備開啟時段是否恰當？",
      asterisk: "no",
    },
    {
      id: "OC-H01",
      description:
        "路口路面排水功能是否良好？（路面之路拱與坡度設計是否可有效排水，避免路面積水？）",
      asterisk: "no",
    },
    {
      id: "OC-H02",
      description: "路口排水溝的功能是否正常運作？",
      asterisk: "no",
    },
    {
      id: "OC-H03",
      description:
        "路口標線於雨天時是否易打滑？（網狀線劃設過密、標線防滑材質不佳皆可能造成車輛打滑）",
      asterisk: "yes",
    },
    {
      id: "OC-H04",
      description: "路口路面是否良好？（路面無破損、凹凸不平或磨損至光滑）",
      asterisk: "no",
    },
    {
      id: "OC-H05",
      description:
        "路口路面是否有雜物影響行駛？（路面散砂、碎石、油渣、破輪胎、落葉或路霸等）",
      asterisk: "yes",
    },
    {
      id: "OC-I01",
      description:
        "路口標誌設置是否無欠缺？\n路口標誌標示內容是否適當？",
      asterisk: "no",
    },
    {
      id: "OC-I02",
      description:
        "路口標誌和標線是否沒有任何的矛盾？",
      asterisk: "no",
    },
    {
      id: "OC-I03",
      description:
        "路口標誌佈設位置是否適當，使駕駛者有足夠時間採取適當及安全的反應動作？",
      asterisk: "no",
    },
    {
      id: "OC-I04",
      description:
        "路口標誌是否有反光或夜間照明？\n白天或黑夜，標誌的能見度是否足夠？",
      asterisk: "no",
    },
    {
      id: "OC-I05",
      description:
        "非行車管制號誌控制的路口，是否以閃光號誌，或停（讓）標誌加停（讓）標線明確標示路口路權？",
      asterisk: "no",
    },
    {
      id: "OC-I06",
      description: "路口轉向管制是否恰當？（是否有設置禁止轉向等相關牌面）",
      asterisk: "no",
    },
    {
      id: "OC-I07",
      description: "路口特殊情況下允許機車可直接左轉時，是否以標誌提示？",
      asterisk: "no",
    },
    {
      id: "OC-I08",
      description:
        "路口未開放機車可直接左轉時，兩段式左轉標誌設置位置是否適當？",
      asterisk: "no",
    },
    {
      id: "OC-I14",
      description: "路口禁止左轉標誌是否未視情況設置於車行方向之左側？",
      asterisk: "yes",
    },
    {
      id: "OC-I15",
      description: "路口禁止及遵行轉向（例如禁止左轉）之標誌未設於路口近端。",
      asterisk: "yes",
    },
    {
      id: "OC-I16",
      description:
        "路口行人及自行車專用標誌是否未依照實際人行道及自行車專用道之空間分布情形設置？",
      asterisk: "yes",
    },
    {
      id: "OC-I17",
      description: "路口舊的標誌是否有清除乾淨？",
      asterisk: "no",
    },
    {
      id: "OC-J01",
      description:
        "路口標線是否清晰且正確？",
      asterisk: "no",
    },
    {
      id: "OC-J02",
      description:
        "路口標線劃設是否適當且連續？（包含路面邊線、車道線、分向限制線、禁止超車線、禁止變換車道線、禁止停車線及禁止臨時停車線）\n路口相關標線劃設之組合配置是否適當？（如配合路口路型之槽化線、車道線等相關標線之組合是否考量行車軌跡）",
      asterisk: "no",
    },
    {
      id: "OC-J03",
      description:
        "路口標誌和標線是否沒有任何的矛盾？",
      asterisk: "no",
    },
    {
      id: "OC-J07",
      description:
        "非行車管制號誌控制的路口，是否以閃光號誌，或停（讓）標誌加停（讓）標線明確標示路口路權？",
      asterisk: "no",
    },
    { id: "OC-J08", description: "路口是否劃設左彎待轉區線？", asterisk: "no" },
    {
      id: "OC-J09",
      description: "路口是否劃設路口行車導引線？",
      asterisk: "no",
    },
    {
      id: "OC-J10",
      description:
        "路口最外側車道配置為直行與右轉共用，且車道寬度大於3.5公尺時，是否劃設分流式指向線？",
      asterisk: "no",
    },
    {
      id: "OC-J11",
      description:
        "多個右轉彎車道配置的臨近路口，交叉口是否有對應的多條右轉導引線？",
      asterisk: "no",
    },
    {
      id: "OC-J12",
      description: "設置機慢車停等區時，停等區上游是否有繪製縮小型指向線？",
      asterisk: "no",
    },
    {
      id: "OC-J13",
      description: "無號誌化路口誤設機慢車停等區？",
      asterisk: "yes",
    },
    {
      id: "OC-J14",
      description: "路口非機慢車可行車道誤設機慢車停等區？",
      asterisk: "yes",
    },
    {
      id: "OC-J15",
      description: "路口紅燈允許右轉車道誤設機慢車停等區？",
      asterisk: "yes",
    },
    { id: "OC-J16", description: "路口機慢車停等區空間不足", asterisk: "yes" },
    {
      id: "OC-J17",
      description: "路口機慢車停等區外框標線是否未與鄰近標線整併？",
      asterisk: "yes",
    },
    {
      id: "OC-J18",
      description:
        "交叉口左轉彎下游路口過窄或過寬（須特別辨識駛入車道）時，是否有轉彎導引線？",
      asterisk: "no",
    },
    {
      id: "OC-J19",
      description:
        "路口設置左彎待轉區線時，是否設於左彎專用車道之前端，且距離交岔路口中心3公尺以上，且不與對向左轉車動線衝突。",
      asterisk: "no",
    },
    {
      id: "OC-J20",
      description:
        "多個左轉彎車道配置的臨近路口，交叉口是否有對應的多條左轉導引線？",
      asterisk: "no",
    },
    {
      id: "OC-J21",
      description:
        "非正交（多岔或斜交）交岔路口，路口車道是否有路名標字或標誌提示用路人？",
      asterisk: "no",
    },
    {
      id: "OC-J22",
      description:
        "非正交（多岔或斜交）交岔路口，路口與交叉口內是否有導引不同行向車流的設計（如槽化或導引線）？",
      asterisk: "no",
    },
    {
      id: "OC-J33",
      description:
        "路口槽化島鼻端之危險標記是否設置且適當？（若槽化島在漸近端甚窄時，標記應設於距離鼻端6 - 9 公尺處）",
      asterisk: "no",
    },
    {
      id: "OC-J34",
      description: "路口槽化島、護欄或障礙物體等結構物之反光或辨識是否良好？",
      asterisk: "no",
    },
    {
      id: "OC-J35",
      description: "路口舊的標線是否有清除乾淨（舊標線殘留）？",
      asterisk: "no",
    },
    {
      id: "OC-K01",
      description:
        "路口是否應設置號誌？（路口號誌化，交通量需求或安全考量是否達到設置條件）",
      asterisk: "yes",
    },
    {
      id: "OC-K02",
      description: "行車管制號誌之路口，其近端及遠端是否皆設有號誌？",
      asterisk: "no",
    },
    {
      id: "OC-K03",
      description: "單向三車道以上的路口，其遠端道路中心線右側是否設有號誌？",
      asterisk: "no",
    },
    {
      id: "OC-K04",
      description: "路口近端號誌立桿與燈頭位置是否在停止線前後3公尺範圍內？",
      asterisk: "no",
    },
    {
      id: "OC-K07",
      description:
        "路口號誌燈面內容是否恰當？（包括箭頭指示方向、鏡面數目及排列順序）",
      asterisk: "no",
    },
    {
      id: "OC-K08",
      description:
        "路口車道由不同組號誌控制時，或為特定行向或車種的號誌，是否設有對應之提示附牌？",
      asterisk: "no",
    },
    {
      id: "OC-K09",
      description:
        "路口號誌燈號的可見度是否良好？（號誌燈號之亮度不明顯，遭遮蔽或日光過強不易辨識等）",
      asterisk: "no",
    },
    {
      id: "OC-K10",
      description:
        "路口號誌時制計畫是否適當？（包含時相、時相長度、綠燈時間等）行人可以在一次綠燈時段就過完馬路嗎？",
      asterisk: "no",
    },
    {
      id: "OC-K11",
      description: "交岔路口黃燈時間是否足夠，≧ 秒？",
      asterisk: "no",
    },
    {
      id: "OC-K12",
      description: "交岔路口全紅時間是否足夠，≧ 秒？",
      asterisk: "no",
    },
    {
      id: "OC-K13",
      description:
        "路口是否有左轉專用時相以及時間長度是否足夠？\n路口尖峰時段號誌時制一週期內，時制配置是否能疏解左轉彎車流，使最後一輛左轉車輛可進入下游離開路口？",
      asterisk: "no",
    },
    {
      id: "OC-K14",
      description: "有左轉彎專用號誌，路口是否設有左轉彎專用車道？",
      asterisk: "no",
    },
    {
      id: "OC-K15",
      description:
        "路口是否有右轉專用時相或紅燈右轉時相，以及時間長度是否足夠？",
      asterisk: "no",
    },
    {
      id: "OC-K16",
      description: "路口行人穿越道是否搭配設置行人專用號誌?",
      asterisk: "no",
    },
    {
      id: "OC-K17",
      description:
        "路口行人專用號誌設置位置是否適當，能讓行人穿越道各處之行人看見號誌？",
      asterisk: "no",
    },
    {
      id: "OC-K18",
      description: "路口行人專用號誌的閃光綠燈時間是否足夠，≧ 秒？",
      asterisk: "no",
    },
    {
      id: "OC-K19",
      description: "路口路側行人號誌燈頭是否距離行穿線過遠？",
      asterisk: "yes",
    },
    {
      id: "OC-K20",
      description: "路口庇護島上是否增設行人號誌燈頭？",
      asterisk: "no",
    },
    {
      id: "OC-K21",
      description: "路口庇護島上之號誌燈頭是否距離行穿線過遠？",
      asterisk: "yes",
    },
    {
      id: "OC-K22",
      description: "在全紅時段結束時，是否有車輛仍滯留於交叉口內？",
      asterisk: "yes",
    },
    {
      id: "OC-K23",
      description:
        "路口轉彎車流因等待穿越行人，以致車流於號誌時制一週期內無法疏解？",
      asterisk: "yes",
    },
    {
      id: "OC-K24",
      description: "路口右轉視距不足時，與車流同相的行人號誌是否早開？",
      asterisk: "no",
    },
    {
      id: "OC-K25",
      description: "路口行人綠燈結束時，是否仍有行人滯留於行人穿越道上？",
      asterisk: "yes",
    },
    {
      id: "OC-K26",
      description:
        "路口行車管制號誌啟動時段是否適當？（如部分路口之號誌於夜間改閃光號誌）",
      asterisk: "no",
    },
    {
      id: "OC-M07",
      description: "路口轉向車道未以附加方式設置",
      asterisk: "yes",
    },
    {
      id: "OC-M08",
      description: "路口是否適合提供左轉？（提供左轉時是否安全）",
      asterisk: "no",
    },
    {
      id: "OC-M09",
      description:
        "機車可直接左轉的交岔路口，號誌、標誌、標線配置是否與該管制方式衝突？(如：兩段左轉標誌、禁行機車標字)",
      asterisk: "yes",
    },
    {
      id: "OC-M10",
      description: "路段開放內側車道可行駛機車時，路口僅允許機車兩段式左轉。",
      asterisk: "yes",
    },
    {
      id: "OC-M11",
      description: "路段未開放內側車道可行機車時，路口開放直接左轉。",
      asterisk: "yes",
    },
    {
      id: "OC-M12",
      description:
        "路口左轉車遇對向汽車回堵時，是否不易觀察回堵汽車外側之直行機車？",
      asterisk: "yes",
    },
    {
      id: "OC-M17",
      description:
        "路口最外側車道配置為直行與右轉共用時，車道寬度是否小於4.5公尺？",
      asterisk: "no",
    },
    {
      id: "OC-M18",
      description:
        "路口車道（快慢）實體分隔，是否禁止分隔島內側車道車輛右轉，且內側車道以箭頭綠燈管制？",
      asterisk: "no",
    },
    { id: "OC-M20", description: "路口提供迴轉時是否安全？", asterisk: "no" },

    {
      id: "OC-N01",
      description:
        "路口道路相關設施（包含號誌桿、標誌桿、路燈、電桿、號誌控制箱及電力箱等設施）之位置是否適當？",
      asterisk: "no",
    },
    {
      id: "OC-N02",
      description:
        "路口道路固定物（包含分隔島鼻端、高架橋墩、行人天橋墩及固定物佇立於道路上者）之位置是否適當？",
      asterisk: "no",
    },
    {
      id: "OC-N03",
      description:
        "路口道路相關設施（包含號誌桿、標誌桿、路燈、電桿、號誌控制箱及電力箱等設施）是否有保護措施？",
      asterisk: "no",
    },
    {
      id: "OC-N04",
      description:
        "路口道路固定物（包含分隔島鼻端、高架橋墩、行人天橋敦及固定物佇立於道路上者）是否有保護措施？",
      asterisk: "no",
    },
    {
      id: "OC-N05",
      description:
        "路口靠右(左)行駛遵行標誌或分道標誌是否未位於分隔島或庇護島頭之前端？",
      asterisk: "yes",
    },
    {
      id: "OC-N08",
      description:
        "路口號誌桿、標誌桿、路燈桿及電桿等相關設施是否貼反光標紙或相關反光設施？",
      asterisk: "no",
    },
    {
      id: "OC-N09",
      description: "路口道路淨高是否不足？（一般車道最小淨高為4.6 公尺",
      asterisk: "yes",
    },

    {
      id: "OC-O02",
      description:
        "路口是否設置有與車流平行之實體或標線型人行道，且淨寬度大於1.5公尺？",
      asterisk: "no",
    },
    {
      id: "OC-O03",
      description:
        "路口對於行人穿越道路是否提供適當之安全設施（行人穿越道、陸橋、地下道等）？",
      asterisk: "no",
    },
    {
      id: "OC-O04",
      description: "路口行人穿越處的道路是否縮減寬度？",
      asterisk: "no",
    },
    {
      id: "OC-O05",
      description: "路口是否繪製行人穿越道標線且其寬至少為2 公尺？",
      asterisk: "no",
    },
    {
      id: "OC-O06",
      description:
        "路口設有實體人行道，行人穿越道是否對齊設置路緣斜坡，且斜坡道寬度大於1.5公尺？",
      asterisk: "no",
    },
    {
      id: "OC-O07",
      description:
        "路口行人的等候區大小是否足夠？",
      asterisk: "no",
    },
    {
      id: "OC-O08",
      description:
        "路口單向三車道以上，與行車方向垂直的行人穿越道是否於道路中央設置庇護島？",
      asterisk: "no",
    },
    {
      id: "OC-O09",
      description:
        "路口中央或車道（快慢）分隔島寬度大於1.5公尺的路口，與行車方向垂直的行人穿越道是否設置行人庇護空間？",
      asterisk: "no",
    },
    {
      id: "OC-O10",
      description:
        "交岔路口斜交且路口分隔島寬度大於2.0公尺時，與行車方向垂直的行人穿越道是否設置錯開式(staggered，Z字型)行人穿越道？",
      asterisk: "no",
    },
    {
      id: "OC-O11",
      description:
        "路口庇護島的長寬是否足夠讓行人和自行車站立或等待？錯開式(staggered，Z字型)行人穿越之分隔島是否大於2.0公尺，可供輪椅轉向？",
      asterisk: "no",
    },
    {
      id: "OC-O12",
      description:
        "路口行人與車流平行穿越交叉口時，是否能與同向右轉車輛彼此互視，不受分隔島、灌木叢或障礙物阻礙？",
      asterisk: "no",
      image: process.env.PUBLIC_URL + "/img/O12.png",
    },
    {
      id: "OC-O13",
      description:
        "路口行人與車流平行穿越交叉口時，是否能與對向左轉車輛彼此互視，不受分隔島、灌木叢或障礙物阻礙？",
      asterisk: "no",
      image: process.env.PUBLIC_URL + "/img/O13.png",
    },
    {
      id: "OC-O14",
      description: "路口行人穿越處（目視）是否平整，可供輪椅行進？",
      asterisk: "no",
    },
    {
      id: "OC-O15",
      description:
        "路口行人穿越道是否搭配設置行人專用號誌，且設置位置是否適當，能讓行人穿越道各處之行人看見號誌？",
      asterisk: "no",
    },
    {
      id: "OC-O16",
      description:
        "路口轉彎車流因等待穿越行人，以致車流於號誌時制一週期內無法疏解的交岔路口，是否設置行人專用時相或行人早開時相？",
      asterisk: "no",
    },
    {
      id: "OC-O17",
      description:
        "路口遠端行人與車流平行穿越交叉口時，是否能與對向右轉車輛彼此互視，不受分隔島、灌木叢或障礙物阻礙？",
      asterisk: "no",
      image: process.env.PUBLIC_URL + "/img/O17.png",
    },
    {
      id: "OC-O18",
      description:
        "路口遠端行人與車流平行穿越交叉口時，是否能與同向左轉車輛彼此互視，不受分隔島、灌木叢或障礙物阻礙？",
      asterisk: "no",
      image: process.env.PUBLIC_URL + "/img/O18.png",
    },
    {
      id: "OC-P03",
      description: "路口是否有適當的設置自行車穿越道？",
      asterisk: "no",
    },
    {
      id: "OC-P04",
      description: "路口自行車的等候區大小是否足夠？",
      asterisk: "no",
    },
    {
      id: "OC-R01",
      description:
        "路口駕駛者在使用車道類別時，是否可掌握足夠的資訊？（有車道指示標誌、路面方向箭頭或路面標字等設施）",
      asterisk: "no",
    },
    {
      id: "OC-R02",
      description: "路口駕駛者是否受標誌牌面過多、號誌位置不當影響其注意力？",
      asterisk: "yes",
    },
    {
      id: "OC-R03",
      description:
        "路口駕駛者是否受道路環境影響其注意力？（如廣告牌、行道樹等影響）",
      asterisk: "yes",
    },
    {
      id: "OC-R04",
      description:
        "路口背景是否有任何問題，影響標誌的可見度？",
      asterisk: "yes",
    },
    {
      id: "OC-R05",
      description:
        "路口綠化和植栽是否對用路人造成困擾（例如道路線形）？\n路口路邊植栽是否會導致駕駛者持續往曲線方向行駛？",
      asterisk: "yes",
    },
    {
      id: "OC-R06",
      description: "路口逆向行駛車流是否很大？（尤其是機車逆向）",
      asterisk: "yes",
    },
  ],
  OD: [
    {
      id: "OD-F31",
      description:
        "同一時相穿越交叉口（含橫向紅燈右轉）的車輛，其下游車道數是否大於或等於上游車道數？",
      asterisk: "no",
    },
    {
      id: "OD-I13",
      description:
        "路口遠端禁止進入之路口，禁止進入標誌未設置於禁止方向之右側或兩側。",
      asterisk: "yes",
    },
    {
      id: "OD-J23",
      description:
        "路口遠端右方若設置有機慢車待轉區，待轉區是否位於上下游車道邊線外？",
      asterisk: "no",
    },
    {
      id: "OD-J24",
      description: "路口遠端右方若設置有機慢車待轉區，機慢車待轉區設置位置不當",
      asterisk: "yes",
    },
    {
      id: "OD-J25",
      description:
        "路口遠端右方若設置有機慢車待轉區，機慢車待轉區占用到橫向直行車流軌跡（停等交叉撞之可能）",
      asterisk: "yes",
    },
    {
      id: "OD-J26",
      description:
        "路口遠端右方若設置有機慢車待轉區，機慢車待轉區占用到對向車道（對向擦撞之可能）",
      asterisk: "yes",
    },
    {
      id: "OD-J27",
      description:
        "路口遠端右方若設置有機慢車待轉區，機慢車待轉區占用到橫向左轉車流軌跡（停等對向擦撞之可能）",
      asterisk: "yes",
    },
    {
      id: "OD-J28",
      description:
        "路口遠端右方若設置有機慢車待轉區，機慢車待轉區占用到橫向右轉車流軌跡（停等對向擦撞之可能）",
      asterisk: "yes",
    },
    {
      id: "OD-J29",
      description:
        "路口遠端右方若設置有機慢車待轉區，於待轉區停等的車輛是否過多，以至於佔用上下游車道邊線內側車輛通行空間？",
      asterisk: "yes",
    },
    {
      id: "OD-O17",
      description:
        "路口遠端行人與車流平行穿越交叉口時，是否能與對向右轉車輛彼此互視，不受分隔島、灌木叢或障礙物阻礙？",
      asterisk: "no",
      image: process.env.PUBLIC_URL + "/img/O17.png",
    },
    {
      id: "OD-O18",
      description:
        "路口遠端行人與車流平行穿越交叉口時，是否能與同向左轉車輛彼此互視，不受分隔島、灌木叢或障礙物阻礙？",
      asterisk: "no",
      image: process.env.PUBLIC_URL + "/img/O18.png",
    },
  ],
};

// const CheckItems = {
//   A: [
//     {
//       id: "C03",
//       description: "路段最高速限標誌（限5）是否設置？",
//       asterisk: "no",
//       rule: `
//     <p>設置規則第85條</p>
//     <p>設於以標誌或標線規定最高速限路段起點及行車管制號誌路口遠端適當距離處，其限制之時速由主管機關參照路線設計、道路狀況、交通量、肇事資料及其他因素定之。設置位置以行車方向右側為主，但為利於車輛駕駛人辨認，單向三車道以上或特殊狀況可增設於左側；若容易被大型車遮擋，必要時標誌可重複設置。本標誌與第179條速率限制標字得同時或擇一設置。</p>

//     <p><strong>以下是相關規範表：</strong></p>

//     <table border="1" style="border-collapse: collapse; text-align: center; width: 100%;">
//       <thead>
//         <tr>
//           <th>服務水準</th>
//           <th>設置標誌</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>設置地點</td>
//           <td>路口或重要設施</td>
//         </tr>
//         <tr>
//           <td>參考因素</td>
//           <td>道路狀況、肇事資料等</td>
//         </tr>
//       </tbody>
//     </table>

//     \n
//     <p><strong>備註：</strong>該標誌可重複設置以確保清晰辨識</p>
//   `,
//     },
//     {
//       id: "C04",
//       description: "路段車輛行駛速率是否恰當？",
//       asterisk: "no",
//       rule: `
//       <p>交通工程規範之第一章總則（P5）</p>
//       <p>行駛速率：道路兩點間之距離除以扣除延滯時間後之實際行駛時間。</p>
//       <p>交通工程規範之第二章交通調查（P17 C2.5）</p>
//       <p>旅行時間調查：調查路段旅行時間與交通停滯情形。</p>

//       \n

//       <p><strong>備註：</strong>該調查可用於分析交通狀況並規劃交通改善措施。</p>
//     `,
//     },
//   ],
//   B: [
//     {
//       id: "G08",
//       description:
//         "臨近路口/路段之路型配置（包含車道數、停車空間、行人空間及分隔設施等）是否適當？",
//       asterisk: "no",
//       rule: `
//     <p>2011年台灣公路容量手冊之第13章市區號誌化路口（Ch13.6.1）</p>
//     <p><strong>服務水準之標準</strong></p>
//     <table border="1" style="border-collapse: collapse; text-align: center; width: 100%;">
//       <thead>
//         <tr>
//           <th>服務水準</th>
//           <th>平均停等延滯時間 d (秒/車)</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>A</td>
//           <td>d ≦ 15</td>
//         </tr>
//         <tr>
//           <td>B</td>
//           <td>15 ≦ d ≦ 30</td>
//         </tr>
//         <tr>
//           <td>C</td>
//           <td>30 ≦ d ≦ 45</td>
//         </tr>
//         <tr>
//           <td>D</td>
//           <td>45 ≦ d ≦ 60</td>
//         </tr>
//         <tr>
//           <td>E</td>
//           <td>60 ≦ d ≦ 80</td>
//         </tr>
//         <tr>
//           <td>F</td>
//           <td>d > 80</td>
//         </tr>
//       </tbody>
//     </table>
//     \n
//     <p><strong>資料來源：</strong>2011年台灣公路容量手冊第16章市區幹道</p>
//     <p>市區幹道之服務水準劃分標準係為速限50、60、70公里/小時的道路所訂定，在此廠區道路並不適用。</p>
//     <p>本計畫暫以速限一半作為可接受及不可接受服務水準的界線：</p>
//     <ul>
//       <li><strong>可接受</strong>：V ≧ 15km/h</li>
//       <li><strong>不可接受</strong>：V ＜ 15km/h</li>
//     </ul>
//   `,
//     },
//   ],
//   C: [
//     {
//       id: "D03",
//       description: "路口左轉的車流量是否過大？",
//       asterisk: "yes",
//       rule: `  <strong>交通工程規範之第二章交通調查（P7 C2.3.1）</strong><br>
//     交叉路口交通量調查：蒐集交叉路口交通量、流向分布及交通組成，作為交叉路口號誌設計、槽化設計、容量與服務水準分析及研擬交通改善計畫之用。<br>
//     <strong>高雄市政府交通局（105-06-01公佈）</strong><br>
//     左轉保護時相設置需考量左轉車流量及有無佈設專用車道等條件限制，高雄市規劃左轉保護時相，除轉向量需達<strong>15%以上</strong>，另道路條件單向車道數需大於等於三車道以上，可佈設左轉專用車道，始配置左轉保護時相。<br><br>
//     資料來源：<br>
//     <a href="https://www.tbkc.gov.tw/Message/Bulletin/News?ID=f590faf3-3397-4098-9ab7-50b6ee1d54fe" target="_blank">
//       https://www.tbkc.gov.tw/Message/Bulletin/News?ID=f590faf3-3397-4098-9ab7-50b6ee1d54fe
//     </a><br>
//     <a href="http://ebooks.lib.ntu.edu.tw/1_file/iot/1448_106418/5371883871.pdf" target="_blank">
//       http://ebooks.lib.ntu.edu.tw/1_file/iot/1448_106418/5371883871.pdf
//     </a>
//   `,
//     },
//   ],
//   D: [
//     {
//       id: "K13",
//       description:
//         "路口遠端禁止進入之路口之禁止進入標誌未設置於禁止方向之右側或兩側。",
//       asterisk: "yes",
//       rule: `<p>可能的情況及對應之標誌類型如下：</p>
//       <ol>
//         <li>車道數2以上時之禁制及遵行標誌。</li>
//         <li>用於警示車行方向左方狀況之警告標誌。</li>
//       </ol>
//       <p>車行方向左側有分隔島或分隔設施，則設置於分隔島或分隔設施上。</p>

//     `,
//     },
//     {
//       id: "L21",
//       description:
//         "路口遠端右方若設置有機慢車待轉區，待轉區是否位於上下游車道邊線外？",
//       asterisk: "no",
//       rule: `
//     <p>標誌標線號誌設置規則第191條第3巷第1款</p>
//     <p>以上下游車道邊線之連線做為判斷依據或以軟體進行軌跡驗證。</p>

//   `,
//     },
//   ],
// };

export default CheckItems;
