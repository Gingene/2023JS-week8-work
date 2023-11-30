const alertSuccess = document.querySelector(".alert-success");
const alertDanger = document.querySelector(".alert-danger");

function alertSuccessInfo(msg) {
  alertSuccess.classList.remove("d-none");
  setTimeout(() => {
    alertSuccess.classList.add("d-none");
  }, 2500);
  alertSuccess.childNodes[1].textContent = msg;
  alertSuccess.childNodes[3].classList.remove("cart-process");
  alertSuccess.childNodes[3].classList.add("cart-process");
}

function alertDangerInfo(msg) {
  alertDanger.classList.remove("d-none");
  setTimeout(() => {
    alertDanger.classList.add("d-none");
  }, 2500);
  alertDanger.childNodes[1].textContent = msg;
  alertDanger.childNodes[3].classList.remove("cart-process");
  alertDanger.childNodes[3].classList.add("cart-process");
}

export { alertSuccessInfo, alertDangerInfo };
