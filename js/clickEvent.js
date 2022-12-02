const navPlusBtn = document.querySelector(".plusBtn");

function onClickEvent(){
    navPlusBtn.style.transform = "rotate(45deg)";
}

navPlusBtn.addEventListener("click", onClickEvent, true);
navPlusBtn.removeEventListener("click", onClickEvent, false);