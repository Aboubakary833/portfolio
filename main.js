import 'iconify-icon';
import "./style.scss";

const sidebar = document.getElementById("mobile-sidebar");
const sidebarContainer = document.getElementById("mobile-sidebar-container");
const showBtn = document.querySelector("#sidebar-show-btn button");
const hideBtn = document.querySelector("#sidebar-hide-btn button");

showBtn.addEventListener("click", showOrHide);
hideBtn.addEventListener("click", showOrHide);

function showOrHide() {
  if (sidebar.classList.contains("hide")) {
    sidebar.setAttribute("class", "bg-anim-show show");
    sidebarContainer.setAttribute("class", "from-left-anim");
  } else {
    sidebarContainer.setAttribute("class", "from-right-anim");
    sidebar.setAttribute("class", "bg-anim-hide");
    setTimeout(() => sidebar.classList.add("hide"), 450);
  }
}
