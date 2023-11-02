const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");
const confirm = document.getElementById("confirm");
const cancel = document.getElementById("cancel");
const main = document.querySelector("main");
let affErrFName = document.getElementById("sp-first-name");
let affErrLName = document.getElementById("sp-last-name");
let affErrEmail = document.getElementById("sp-email");
let affErrPhone = document.getElementById("sp-phone");
let userInfo;
let infoChecker;

if (!JSON.parse(localStorage.getItem("searchData")))
  main.innerHTML =
    "<div class='cancel-main'>Nothing in reservation please go home<div/>";

cancel.addEventListener("click", () => {
  main.innerHTML =
    "<div class='cancel-main'>Nothing in reservation please go home<div/>";
  localStorage.clear();
});

confirm.addEventListener("click", () => {
  affiche();
  if (infoChecker === false) {
    return;
  } else {
    userInfo = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
    };

    localStorage.setItem("user-info", JSON.stringify(userInfo));
    window.location.href = "../pages/devis.html"
  }
});

function affiche() {
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let regexName = /^[A-Za-z]+$/;

  let regexPhone = /^\+212[0-9]{9}$/;

  //  First Name validation

  if (firstName.value == "") {
    affErrFName.innerHTML = "this field must be filled out ";
    infoChecker = false;
    return;
  } else if (!regexName.test(firstName.value)) {
    affErrFName.innerHTML = "Invalid  name ";
    infoChecker = false;
    return;
  } else {
    affErrFName.innerHTML = "";
    infoChecker = true;
  }

  //   Last Name validation

  if (lastName.value == "") {
    affErrLName.innerHTML = "this field must be filled out ";
    infoChecker = false;
    return;
  } else if (!regexName.test(lastName.value)) {
    affErrLName.innerHTML = "Invalid name ";
    infoChecker = false;
    return;
  } else {
    affErrLName.innerHTML = "";
    infoChecker = true;
  }

  // // Email validation & check
  if (email.value == "") {
    affErrEmail.innerHTML = "this field must be filled out ";
    infoChecker = false;
    return;
  } else if (!regexEmail.test(email.value)) {
    affErrEmail.innerHTML = "Invalid email address  ";
    infoChecker = false;
    return;
  } else {
    affErrEmail.innerHTML = "";
    infoChecker = true;
  }

  // // Phone validation
  if (phone.value == "") {
    affErrPhone.innerHTML = "this field must be filled out ";
    infoChecker = false;
    return;
  } else if (!regexPhone.test(phone.value)) {
    affErrPhone.innerHTML =
      "Invalid phone number. <br>It should start with '+212' and have 9 digits.";
    infoChecker = false;
    return;
  } else {
    affErrPhone.innerHTML = "";
    infoChecker = true;
  }
}
