const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");
const confirm = document.getElementById("confirm");
const cancel = document.getElementById("cancel");
const main = document.querySelector("main");
let userInfo

if (!JSON.parse(localStorage.getItem("searchData")))
  main.innerHTML =
    "<div class='cancel-main'>Nothing in reservation please go home<div/>";

cancel.addEventListener("click", () => {
  main.innerHTML =
    "<div class='cancel-main'>Nothing in reservation please go home<div/>";
  localStorage.clear();
});

confirm.addEventListener("click", () => {
    userInfo = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value
    };

    localStorage.setItem("user-info", JSON.stringify(userInfo));
    console.log(userInfo);
  });
