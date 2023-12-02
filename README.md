# 2023JS 直播班第八周前後台管理

## 資料夾結構

```
- css # css資源放置處
    - all.css # 處理index.html的css文件
    - admin.css # 處理admin.html的css文件
    - c3.css # c3的css文件
- js # js資源放置處
    - all.js 載入d3和c3的js並判斷網頁位置載入不同的js文件
    - user # 處理index.html所有的js文件
        - user.js # 處理前台頁面監聽事件
        - product.js # 取得和處理商品渲染
        - cart.js # 處理商品資料
        - order.js # 驗證客戶訂單表單行為
    - admin # 處理admin.html所有的js文件
        - admin.js # 處理後台頁面監聽事件
        - order.js # 處理客戶訂單
        - c3data.js # 將資料製成c3圓餅圖並呈現
    - api
        - config.js # 匯出 api 位址
    - helpers # 放置外部套件
    - utils # 放置元件和其他處理頁面的動畫效果
- main.js 匯入js中所有的js文件
- index.html 前台頁面
- admin.html 後台頁面

```
