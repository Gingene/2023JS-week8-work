import { alertInfo, alertWait } from "../utils/alert.js";

import {
  productData,
  producList,
  getProductData,
  renderProductList,
} from "./product.js";

import {
  cartsUrl,
  cartData,
  cartList,
  discardAllBtn,
  getCartData,
} from "./carts.js";

import { ordersUrl, orderInfo, validateEmail, validatePhone } from "./order.js";

const productSelect = document.querySelector(".productSelect");

getProductData();

getCartData();

// 監聽事件
productSelect.addEventListener("change", (e) => {
  // console.log(e.target.value);
  if (e.target.value === "全部") {
    renderProductList(productData);
  } else {
    const filterData = productData.filter(
      (item) => item.category === e.target.value
    );
    renderProductList(filterData);
  }
});

producList.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.dataset.target) {
    return;
  }
  const productId = e.target.dataset.target;
  // console.log(e.target.dataset.target);
  let num = 1;
  const findCartData = cartData.find((item) => item.product.id === productId);
  alertWait("正為您處理購物車");
  if (findCartData) {
    axios
      .patch(cartsUrl, {
        data: {
          id: findCartData.id,
          quantity: findCartData.quantity + 1,
        },
      })
      .then((patchRes) => {
        // console.log(patchRes);
        alertInfo(`${findCartData.product.title} 數量加1`, "alert-success");
        getCartData();
      })
      .catch((err) => {
        // console.log(err);
        alertInfo("請稍後再試", "alert-danger");
      });
  } else {
    axios
      .post(cartsUrl, {
        data: {
          productId: productId,
          quantity: num,
        },
      })
      .then((postRes) => {
        // console.log(postRes);
        alertInfo("已成功加入購物車", "alert-success");
        getCartData();
      })
      .catch((err) => {
        // console.log(err);
        alertInfo("請稍後再試", "alert-danger");
      });
  }
});

cartList.addEventListener("click", (e) => {
  e.preventDefault();
  const cartProductId = e.target.dataset.target;
  if (!cartProductId) {
    return;
  }
  alertWait("正為您處理購物車");
  axios
    .delete(cartsUrl + "/" + cartProductId)
    .then((delRes) => {
      // console.log(delRes.data);
      alertInfo(`已刪除品項`, "alert-success");
      getCartData();
    })
    .catch((err) => {
      // console.log(err);
      alertInfo(`請稍後再試`, "alert-danger");
    });
});

discardAllBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (cartData.length === 0) {
    alertInfo("購物車已經是空的了", "alert-danger");
    // debounceAlert();
    return;
  }
  alertWait("正為您處理購物車");
  axios
    .delete(cartsUrl)
    .then((delRes) => {
      // console.log(delRes.data);
      alertInfo("已清空購物車", "alert-success");
      getCartData();
    })
    .catch((err) => {
      // console.log(err);
      alertInfo("請稍後再試", "alert-danger");
    });
});

orderInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cartData.length === 0) {
    alertInfo("請加入購物車", "alert-danger");
    return;
  }
  const customerName = document.querySelector("#customerName").value;
  const customerPhone = document.querySelector("#customerPhone").value;
  const customerEmail = document.querySelector("#customerEmail").value;
  const customerAddress = document.querySelector("#customerAddress").value;
  const customerTradeWay = document.querySelector("#tradeWay").value;
  if (
    customerName == "" ||
    customerPhone == "" ||
    customerEmail == "" ||
    customerAddress == "" ||
    customerTradeWay == ""
  ) {
    alertInfo("請勿輸入空資訊", "alert-danger");
    return;
  }
  if (!validateEmail(customerEmail)) {
    alertInfo("請填寫正確的信箱格式", "alert-danger");
    return;
  }
  if (!validatePhone(customerPhone)) {
    alertInfo("請填寫09開頭共10位數字", "alert-danger");
    return;
  }
  alertWait("正為您處理訂單");
  axios
    .post(ordersUrl, {
      data: {
        user: {
          name: customerName,
          tel: customerPhone,
          email: customerEmail,
          address: customerAddress,
          payment: customerTradeWay,
        },
      },
    })
    .then((res) => {
      // console.log(res.data);
      e.target.reset();
      alertInfo("訂單建立成功", "alert-success");
      getCartData();
    })
    .catch((err) => {
      // console.log(err);
      alertInfo("很抱歉，請再重新操作一次", "alert-danger");
    });
});
