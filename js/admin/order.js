import { token, baseUrl2 } from "../api/config.js";
import { alertSuccessInfo, alertDangerInfo } from "../utils/alert.js";

const orderUrl = `${baseUrl2}/orders`;

const orderList = document.querySelector(".order-admin");

let orderData = [];

function getOrdersData() {
  axios
    .get(orderUrl, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data);
      orderData = res.data.orders;
      rednerOrderList(orderData);
    });
}
getOrdersData();

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

orderList.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.dataset.target) {
    return;
  }
  const orderId = e.target.dataset.target;

  if (e.target.nodeName === "A") {
    changeOrderStatus(orderId);
  }
  if (e.target.className === "delSingleOrder-Btn") {
    deleteOrder(orderId);
  }
});

function changeOrderStatus(orderId) {
  const result = orderData.find((item) => item.id === orderId);
  console.log(result);
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
      alertSuccessInfo("更新訂單付款狀態");
      getOrdersData();
    })
    .catch((err) => {
      console.log(err);
      alertDangerInfo("請稍後再嘗試");
    });
}

function deleteOrder(orderId) {
  axios
    .delete(`${orderUrl}/${orderId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      alertSuccessInfo(`已成功刪除訂單編號${orderId}`);
      getOrdersData();
    })
    .catch((err) => {
      console.log(err);
      alertDangerInfo("請稍後再嘗試");
    });
}
