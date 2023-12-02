import {
  orderList,
  discardAllBtn,
  getOrdersData,
  changeOrderStatus,
  deleteOrder,
  deleteAllOrders,
} from "./order.js";

getOrdersData();

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

discardAllBtn.addEventListener("click", (e) => {
  e.preventDefault();
  deleteAllOrders();
});
