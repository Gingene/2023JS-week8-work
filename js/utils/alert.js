const alert = document.querySelector(".alert-info");

function debounce(callback) {
  let timeout;
  return () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, 3000);
  };
}

const debounceAlert = debounce(() => {
  alert.classList.add("d-none");
});

function alertInfo(msg, type) {
  removeloading();
  const div = document.createElement("div");
  alert.classList.remove("d-none");
  div.innerHTML = `
    <p>${msg}</p>
    <meter class="cart-process" min="0" max="100" value="100">
      100
    </meter>
  `;
  div.setAttribute("role", "alert");
  const className = ["alert", type];
  div.classList.add(...className);
  alert.append(div);
  setTimeout(() => {
    alert.removeChild(div);
  }, 2500);
  debounceAlert();
  // "alert-success"
  // "alert-danger"
}

function loading(msg) {
  const wait = document.querySelector(".loading");
  wait.classList.remove("d-none");
  wait.childNodes[1].childNodes[1].textContent = msg;
}

function removeloading() {
  const wait = document.querySelector(".loading");
  wait.classList.add("d-none");
}

export { alertInfo, loading };
