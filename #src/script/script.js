function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

//burger click

let element = document.querySelector(".menu_nav");
let body = document.querySelector("body");
let popupHeader = document.querySelector(".popap__container_wrap");

element.addEventListener("click", (e) => {
  // e.preventDefault();
  element.classList.toggle("active");
  body.classList.toggle("lockScroll");
  popupHeader.classList.toggle("popap__container_wrap__active");
});

//popup

// setTimeout(() => {
//   alertInfo();
// }, 10000);

// popup form

const closePopupForm = document.querySelector(".popup__close");
const popupForm = document.querySelector(".popup__container");

// setTimeout(() => {
//   popupForm.classList.add("active");
// }, 1000);

closePopupForm.addEventListener("click", () => {
  popupForm.classList.add("popup__container__close");
  popupForm.classList.remove("popup__container__active");
});
function showPopupForm() {
  popupForm.classList.add("popup__container__active");
}

setTimeout(showPopupForm, 60000);
