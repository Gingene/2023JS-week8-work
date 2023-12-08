import { token, baseUrl } from "../api/config.js";
import handleThousands from "../utils/handleThousands.js";

const cartsUrl = `${baseUrl}/carts`;
let cartData = [];

const cartList = document.querySelector(".shopping-cartList");
const discartAllBtn = document.querySelector(".discardAllBtn");

function renderCartList(dataList, totalPrice) {
  document.querySelector("#cartTotalPrice").textContent =
    handleThousands(totalPrice);
  const fragment = document.createDocumentFragment();
  dataList.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div class="cardItem-title">
          <img src="${item.product.images}" alt="${item.product.title}" />
          <p>${item.product.title}</p>
        </div>
      </td>
      <td>NT$${handleThousands(item.product.price)}</td>
      <td>${item.quantity}</td>
      <td>NT$${handleThousands(item.product.price * item.quantity)}</td>
      <td class="discardBtn">
        <a href="#" class="material-icons" data-target="${item.id}"> clear </a>
      </td>
      `;
    fragment.append(tr);
  });
  while (cartList.firstChild) {
    cartList.removeChild(cartList.firstChild);
  }
  cartList.append(fragment);
}

function getCartData() {
  axios
    .get(cartsUrl)
    .then((res) => {
      cartData = res.data.carts;
      renderCartList(cartData, res.data.finalTotal);
    })
    .catch((err) => {
      console.log(err);
    });
}

export { cartsUrl, cartData, cartList, discartAllBtn, getCartData };
