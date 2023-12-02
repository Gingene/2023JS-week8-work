import { token, baseUrl2 } from "../api/config.js";
import { alertInfo, alertWait } from "../utils/alert.js";
import c3DrawPie from "./c3data.js";

const orderUrl = `${baseUrl2}/orders`;

const orderList = document.querySelector(".order-admin");
const discardAllBtn = document.querySelector(".discardAllBtn");

let orderData = [];

alertWait("讀取資料中請稍後");
function getOrdersData() {
  axios
    .get(orderUrl, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      alertInfo("資料讀取成功", "alert-success");
      orderData = res.data.orders;
      rednerOrderList(orderData);
      c3DrawPie(orderData);
    });
}

function rednerOrderList(dataArray) {
  const fragment = document.createDocumentFragment();
  dataArray.forEach((item) => {
    const tr = document.createElement("tr");
    const timeStamp = new Date(item.createdAt * 1000);
    const orderTime = `${timeStamp.getFullYear()}/${
      timeStamp.getMonth() + 1
    }/${timeStamp.getDate()}`;
    let producList = "";
    for (let productItem of item.products) {
      producList += `<p>${productItem.title}x${productItem.quantity}</p>`;
    }
    tr.innerHTML = `
            <td>${item.id}</td>
            <td>
                <p>${item.user.name}</p>
                <p>${item.user.tel}</p>
            </td>
            <td>${item.user.address}</td>
            <td>${item.user.email}</td>
            <td>
                ${producList}
            </td>
            <td>${orderTime}</td>
            <td class="orderStatus">
                <a href="#" data-target="${item.id}" >${
      item.paid ? "已處理" : "未處理"
    }</a>
            </td>
            <td>
                <input type="button" class="delSingleOrder-Btn" data-target="${
                  item.id
                }" value="刪除" />
            </td>
        `;
    fragment.append(tr);
  });
  while (orderList.firstChild) {
    orderList.removeChild(orderList.firstChild);
  }
  orderList.append(fragment);
}

function changeOrderStatus(orderId) {
  const result = orderData.find((item) => item.id === orderId);
  alertWait("更新資料中請稍後");
  axios
    .put(
      orderUrl,
      {
        data: {
          id: orderId,
          paid: !result.paid,
        },
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => {
      alertInfo("已更新訂單付款狀態", "alert-success");
      orderData = res.data.orders;
      rednerOrderList(orderData);
    })
    .catch((err) => {
      alertInfo("請稍後再嘗試", "alert-danger");
    });
}

function deleteOrder(orderId) {
  alertWait("更新資料中請稍後");
  axios
    .delete(`${orderUrl}/${orderId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      alertInfo(`已成功刪除訂單編號${orderId}`, "alert-success");
      orderData = res.data.orders;
      rednerOrderList(orderData);
      c3DrawPie(orderData);
    })
    .catch((err) => {
      alertInfo("請稍後再嘗試", "alert-danger");
    });
}

function deleteAllOrders() {
  alertWait("更新資料中請稍後");
  axios
    .delete(orderUrl, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      alertInfo("已成功清除全部訂單", "alert-success");
      orderData = res.data.orders;
      rednerOrderList(orderData);
      c3DrawPie(orderData);
    })
    .catch((err) => {
      alertInfo("請稍後再嘗試", "alert-danger");
    });
}

export {
  orderList,
  discardAllBtn,
  getOrdersData,
  changeOrderStatus,
  deleteOrder,
  deleteAllOrders,
};
