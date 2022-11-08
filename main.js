import 'iconify-icon';
import "./style.scss";

const sidebar = document.getElementById("mobile-sidebar");
const sidebarContainer = document.getElementById("mobile-sidebar-container");
const showBtn = document.querySelector("#sidebar-show-btn button");
const hideBtn = document.querySelector("#sidebar-hide-btn button");
const lightThemeToggleBtn = document.getElementById('toggle-to-light');
const darkThemeToggleBtn = document.getElementById('toggle-to-dark');
const toggleCircle = document.getElementById('toggle-circle');
const storage = window.localStorage

window.addEventListener('load', function() {
  if(storage.getItem('abc_theme')) {
    document.body.setAttribute('data-theme', storage.getItem('abc_theme'));
    toggleCircle.setAttribute('class', `${storage.getItem('abc_theme')}-theme-toggle`);
  } else {
    toggleCircle.setAttribute('class', "light-theme-toggle");
    storage.setItem('abc_theme', "light")
  }
});
showBtn.addEventListener("click", showOrHide);
hideBtn.addEventListener("click", showOrHide);
lightThemeToggleBtn.addEventListener('click', function() {
  if(storage.getItem('abc_theme') === "dark") {
    changeTheme('light')
  }
})

darkThemeToggleBtn.addEventListener('click', function() {
  if(storage.getItem('abc_theme') === "light") {
    changeTheme('dark')
  }
})

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

function changeTheme(theme) {
  switch (theme) {
    case "dark":
      storage.setItem('abc_theme', "dark")
      document.body.setAttribute('data-theme', "dark");
      toggleCircle.setAttribute('class', "dark-theme-toggle");
      break;
  
    default:
      storage.setItem('abc_theme', "light")
      document.body.setAttribute('data-theme', "light");
      toggleCircle.setAttribute('class', "light-theme-toggle");
      break;
  }
}