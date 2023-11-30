import { token, baseUrl } from "../api/config.js";
// import handleThousands from "../utils/handleThousands.js";
import { alertSuccessInfo, alertDangerInfo } from "../utils/alert.js";

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
  console.log(e.target.value);
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
  console.log(e.target.dataset.target);
  let num = 1;
  const findCartData = cartData.find((item) => item.product.id === productId);
  console.log(findCartData);
  if (findCartData) {
    axios
      .patch(cartsUrl, {
        data: {
          id: findCartData.id,
          quantity: findCartData.quantity + 1,
        },
      })
      .then((patchRes) => {
        console.log(patchRes);
        alertSuccessInfo(`${findCartData.product.title} 數量加1`);
        getCartData();
      })
      .catch((err) => {
        console.log(err);
        alertDangerInfo("請稍後再試");
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
        console.log(postRes.data);
        alertSuccessInfo("已成功加入購物車");
        getCartData();
      })
      .catch((err) => {
        console.log(err);
        alertDangerInfo("請稍後再試");
      });
  }
});

cartList.addEventListener("click", (e) => {
  e.preventDefault();
  const cartProductId = e.target.dataset.target;
  if (!cartProductId) {
    return;
  }
  console.dir(e.target);
  axios
    .delete(cartsUrl + "/" + cartProductId)
    .then((delRes) => {
      console.log(delRes.data);
      alertSuccessInfo(`已刪除品項`);
      getCartData();
    })
    .catch((err) => {
      console.log(err);
    });
});

discardAllBtn.addEventListener("click", (e) => {
  e.preventDefault();
  axios
    .delete(cartsUrl)
    .then((delRes) => {
      console.log(delRes.data);
      alertSuccessInfo(`已清空購物車`);
      getCartData();
    })
    .catch((err) => {
      console.log(err);
    });
});

orderInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cartData.length === 0) {
    alertDangerInfo("請加入購物車");
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
    alertDangerInfo("請勿輸入空資訊");
    return;
  }
  if (!validateEmail(customerEmail)) {
    alertDangerInfo("請填寫正確的信箱格式");
    return;
  }
  if (!validatePhone(customerPhone)) {
    alertDangerInfo("請填寫09開頭共10位數字");
    return;
  }

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
      console.log(res.data);
      e.target.reset();
      alertSuccessInfo("訂單建立成功");
      getCartData();
    })
    .catch((err) => {
      console.log(err);
      alertSuccessInfo("抱歉，請再重新操作一次");
    });
});
