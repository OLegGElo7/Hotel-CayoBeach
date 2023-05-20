// берем в константы переменные для скролла
const header = document.querySelector(".header");

// функциря скролла
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    header.classList.add("header__background");
  } else {
    header.classList.remove("header__background");
  }
});
