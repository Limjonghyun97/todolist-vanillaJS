const body = document.querySelector("body");
const changeBtn = document.querySelector(".change_btn");

function randomImg() {
  const imgArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
  const random = imgArr[Math.floor(Math.random()*imgArr.length)];
  body.style.backgroundImage = `url(../img/${random})`;
}

changeBtn.addEventListener("click", randomImg);
