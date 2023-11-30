import "./helpers/d3.min.js";
import "./helpers/c3.min.js";
const currentPath = window.location.pathname;

if (
  currentPath === "/" ||
  currentPath === "/index.html" ||
  currentPath === "/2023JS-week8-work/" ||
  currentPath === "/2023JS-week8-work/index.html"
) {
  import("./utils/index-animation.js");
  import("./user/user.js");
} else if (
  currentPath === "/admin.html" ||
  currentPath === "/2023JS-week8-work/admin.html"
) {
  import("./utils/admin-animation.js");
  import("./admin/admin.js");
}
