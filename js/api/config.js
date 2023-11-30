const path = "gingene";
const token = "ewLRJ2WDZfWcB67voDjFU3cESrx2";

const base = "https://livejs-api.hexschool.io";
// https://livejs-api.hexschool.io/api/livejs/v1/customer/gingene/products
const baseUrl = `${base}/api/livejs/v1/customer/${path}`;
const baseUrl2 = `${base}/api/livejs/v1/admin/${path}`;

// https://hexschool.github.io/hexschoolliveswagger/ // 文件

// GET ​/api​/livejs​/v1​/customer​/{api_path}​/products

// POST ​/api​/livejs​/v1​/customer​/{api_path}​/carts

// PATCH ​/api​/livejs​/v1​/customer​/{api_path}​/carts

// DELETE ​/api​/livejs​/v1​/customer​/{api_path}​/carts

// DELETE ​/api​/livejs​/v1​/customer​/{api_path}​/carts​/{id}

// 訂單相關(管理者)

// GET
// ​/api​/livejs​/v1​/admin​/{api_path}​/orders

// PUT
// ​/api​/livejs​/v1​/admin​/{api_path}​/orders

// DELETE
// ​/api​/livejs​/v1​/admin​/{api_path}​/orders

// DELETE
// ​/api​/livejs​/v1​/admin​/{api_path}​/orders​/{id}

export { token, baseUrl, baseUrl2 };
