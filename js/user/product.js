import { baseUrl } from "../api/config.js";
import handleThousands from "../utils/handleThousands.js";

const productsUrl = `${baseUrl}/products`;

const producList = document.querySelector(".productWrap");

let productData = [];

function getProductData() {
  axios
    .get(productsUrl)
    .then((res) => {
      productData = res.data.products;
      renderProductList(productData);
    })
    .catch((err) => {
      // console.log(err);
    });
}

function renderProductList(dataList) {
  const fragment = document.createDocumentFragment();
  dataList.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
              <h4 class="productType">新品</h4>
              <img
              src="${item.images}"
              alt="${item.title}"
              />
              <a href="#" 
              type="button"
              class="addCardBtn" 
              id="btn-${item.id}" 
              data-target=${item.id}
              >
                加入購物車
              </a>
              <h3>${item.title}</h3>
              <del class="originPrice">NT$${handleThousands(
                item.origin_price
              )}</del>
              <p class="nowPrice">NT$${handleThousands(item.price)}</p>
          `;
    li.setAttribute("id", item.id);
    li.classList.add("productCard");
    fragment.append(li);
  });
  while (producList.firstChild) {
    producList.removeChild(producList.firstChild);
  }
  producList.append(fragment);
}

export { productData, producList, getProductData, renderProductList };
