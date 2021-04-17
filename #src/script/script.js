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

const supportBtn = document.querySelector(".fa-info-circle");
const closePopupForm = document.querySelector(".popup__close");
const popupForm = document.querySelector(".popup__container");
const popup__submit_btn = document.querySelector(".popup__submit_btn");

supportBtn.addEventListener("click", showPopupForm);

closePopupForm.addEventListener("click", () => {
  popupForm.classList.add("popup__container__close");
  popupForm.classList.remove("popup__container__active");
});
function showPopupForm(e) {
  popupForm.classList.add("popup__container__active");
}

setTimeout(showPopupForm, 60000);

// popup__submit_btn.addEventListener("click", () => {
//   let popupConfirm = document.createElement("div");
//   popupConfirm.classList.add("confirmed");
//   body.appendChild(popupConfirm);
//   let text = document.createElement("h1");
//   popupConfirm.appendChild(text);
//   popupConfirm.style.width = "300px";
//   popupConfirm.style.height = "200px";
//   popupConfirm.style.backgroundColor = "#3B181E";
//   text.innerHTML = "Sent , thank you";
//   text.style.textAlign = "center";
//   text.style.marginTop = "100px";
//   text.style.fontSize = "33px";
// });
