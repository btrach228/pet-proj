function testWebP(e){var t=new Image;t.onload=t.onerror=function(){e(2==t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}testWebP((function(e){1==e?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")}));let element=document.querySelector(".menu_nav");function alertInfo(){alert("hERE WILl BE POPUP")}console.log(element),element.addEventListener("click",e=>{e.preventDefault(),element.classList.toggle("active")}),setTimeout(()=>{alertInfo()},1e3);