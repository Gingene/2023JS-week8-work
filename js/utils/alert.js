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
  removeAlertWait();
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

function alertWait(msg) {
  const div = document.createElement("div");
  alert.classList.remove("d-none");
  div.innerHTML = `
    <p>${msg}</p>
    <div>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; background: #cff4fc; display: block"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9166666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(30 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8333333333333334s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(60 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6666666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(120 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5833333333333334s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(150 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4166666666666667s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(210 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.3333333333333333s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(240 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.16666666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(300 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.08333333333333333s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(330 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill="#fe718d"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
    </div>
  `;
  div.setAttribute("role", "alert");
  const className = ["alert", "alert-wait"];
  div.classList.add(...className);
  alert.append(div);
}

function removeAlertWait() {
  const waits = document.querySelectorAll(".alert-wait");
  waits.forEach((item) => {
    alert.removeChild(item);
  });
}

export { alertInfo, alertWait };
