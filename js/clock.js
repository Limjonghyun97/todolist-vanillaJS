const clock = document.querySelector(".clock");

function getClock() {
  const today = new Date();
  const Hours = String(today.getHours()).padStart(2, "0");
  const Minutes = String(today.getMinutes()).padStart(2, "0");

  clock.innerText = `${Hours} : ${Minutes}`;
}

setInterval(getClock, 1000);
