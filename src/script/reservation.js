const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");
const confirm = document.getElementById("confirm");
const cancel = document.getElementById("cancel");
const main = document.querySelector("main");




cancel.addEventListener("click", () => {
    main.innerHTML = "<div class='cancel-main'>Nothing in reservation please go to home<div/>"
    localStorage.clear();
});