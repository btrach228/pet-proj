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

// slider and counter

//selectors
const text = document.querySelector(".counter-block");
const btnR = document.querySelector(".main__caruselle-button_right");
const btnL = document.querySelector(".main__caruselle-button_left");

const img = document.querySelector(".slder_1");

//listeners
btnR.addEventListener("click", right);
btnL.addEventListener("click", left);

//functions
function left() {
  text.innerText = "1/2";
  img.innerHTML = `<img src="./media/slider_phot__1.jpg" alt="" class="right__photo" />  <a href="#" class="main__caruselle-right-btn"
  >ВЗГЛЯНУТЬ <span> &#8594;</span></a
>`;
}
function right() {
  text.innerText = "2/2";
  img.innerHTML = `<img src="./media/pexels-pixabay-534174.jpg" alt="" class="right__photo" />  <a href="#" class="main__caruselle-right-btn"
  >ВЗГЛЯНУТЬ <span> &#8594;</span></a
>`;
}

//burger

const burgerBtn = document.querySelector(".header__navigation__burger");
const burgerMenu = document.querySelector(".header__navigation");
const currSlide = document.querySelectorAll(".header__navigation-item a");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  burgerBtn.classList.toggle("header__navigation__burger-active");
  burgerMenu.classList.toggle("header__navigation-active");
  body.classList.toggle("active");
});

currSlide.forEach((item) => {
  item.addEventListener("click", (e) => {
    burgerBtn.classList.remove("header__navigation__burger-active");
    burgerMenu.classList.remove("header__navigation-active");
    body.classList.remove("active");
    currSlide.classList.toggle("header__navigation-item__active");
  });
});

//header

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.add("active");
});

//input check

const inp = document.querySelectorAll("input");
const submBtn = document.querySelector(".main__contact-us-lf_btn");
const emailInp = document.querySelector("input[type=email]");
const textArea = document.querySelector("textarea");
const formBlock = document.querySelector(".main__contact-us-lf");

submBtn.addEventListener("click", (e) => {
  inp.forEach((item) => {
    if (!item.value || item.value === " ") {
      item.style.border = "1px solid red";
      e.preventDefault();
    } else {
      item.style.border = "1px solid green";
    }
    let alertShort = document.createElement("p");
    formBlock.appendChild(alertShort);
    alertShort.innerText = "Минимальная длина текса 50 слов ";

    if (textArea.value.length < 50) {
      textArea.style.border = "1px solid red";

      alertShort.classList.add("form-error");
    } else if (textArea.value.length >= 50) {
      textArea.style.border = "1px solid green";
      alertShort.innerText = "";
      formBlock.classList.remove("form-error");
      formBlock.removeChild(alertShort);
    }
  });
});
