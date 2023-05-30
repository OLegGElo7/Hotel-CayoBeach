// переменные для скролла
const header = document.querySelector(".header");

// функциря скролла
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    header.classList.add("header__background");
  } else {
    header.classList.remove("header__background");
  }
});

// переменные для перевода языка
const select = document.querySelector(".headaer__language-select");
const langAll = ["en", "ru", "es"];
// функция изменения url
select.addEventListener("change", function () {
  let lang = select.value;
  // '"#" + lang' - это hash
  location.href = window.location.pathname + "#" + lang;
  location.reload();
});
// функция изменения языка
function changeLang() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  select.value = hash;
  if (!langAll.includes(hash)) {
    location.href = window.location.pathname + "#es";
    location.reload();
  }
  // перебор классов
  for (let key in arrLang) {
    let elem = document.querySelector(".lang-" + key);
    if (elem) {
      elem.innerHTML = arrLang[key][hash];
    }
  }
}

changeLang();

// переменная для скролла
const scrolls = document.querySelectorAll(".scroll");
// функция плавного скролла
for (let scroll of scrolls) {
  scroll.addEventListener("click", function (event) {
    //отмена дефолта от браузера
    event.preventDefault();
    //значение атрибута href без #
    const blockID = scroll.getAttribute("href").substr(1);
    // плавный скролл
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
