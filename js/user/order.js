import { baseUrl } from "../api/config.js";

const ordersUrl = `${baseUrl}/orders`;
const orderInfo = document.querySelector(".orderInfo-form");

function orderInfoAlert(element) {
  element.addEventListener("input", (e) => {
    if (e.target.value.trim() === "") {
      e.target.focus();
      e.target.nextElementSibling.classList.remove("d-none");
      return;
    } else {
      e.target.nextElementSibling.classList.add("d-none");
    }
  });
}

function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const regex = /^09\d{8}$/;
  return regex.test(phone);
}

const orderInfoInputs = document.querySelectorAll(".orderInfo-input");
orderInfoInputs.forEach((item) => {
  orderInfoAlert(item);
});

export { ordersUrl, orderInfo, validateEmail, validatePhone };
