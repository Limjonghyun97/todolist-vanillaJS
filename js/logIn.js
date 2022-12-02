const logIn = document.querySelector(".log_in")
const toDo = document.querySelector(".todo");
const userName = document.querySelector(".user_name");



function onLogInEvent(event){
    event.preventDefault()
    logIn.style.display = "none";
    toDo.style.display = "flex";
    userName.style.display = "inline";
}


logIn.addEventListener("submit", onLogInEvent)