const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");
const confirm = document.getElementById("confirm");
const cancel = document.getElementById("cancel");
const main = document.querySelector("main");
const cart = document.querySelector(".js-cart");
let affErrFName = document.getElementById("sp-first-name");
let affErrLName = document.getElementById("sp-last-name");
let affErrEmail = document.getElementById("sp-email");
let affErrPhone = document.getElementById("sp-phone");
let infoChecker;
let searchChecker = JSON.parse(localStorage.getItem("searchData"));
let reservedData = JSON.parse(localStorage.getItem("reservedData"));
let userInfo = JSON.parse(localStorage.getItem("user-info"));
let price;

if (!reservedData) {
  main.innerHTML =
    "<div class='cancel-main'>Nothing in reservation please go home<div/>";
}

if (userInfo) {
  firstName.value = userInfo.firstName;
  lastName.value = userInfo.lastName;
  email.value = userInfo.email;
  phone.value = userInfo.phone;
} else phone.value = "+1";

if (reservedData.price == "$$$") price = 120;
else if (reservedData.price == "$$") price = 68;
else if (reservedData.price == "$") price = 49;
else price = 300;

cart.innerHTML = `<!-- calendar -->
<div class="flex">
  <ion-icon name="calendar-outline"></ion-icon>
  <p class="font text-xs font-light ml-2">${searchChecker.date} </p>
</div>
<!-- location -->
<div class="flex">
  <ion-icon name="location"></ion-icon>
  <p class="font text-xs font-light ml-2">${reservedData.name} ${reservedData.location.address1}, ${reservedData.location.city}</p>
</div>
<!-- guests -->
<div class="flex">
  <ion-icon name="person-outline"></ion-icon>
  <p class="font text-xs font-light ml-2"> ${searchChecker.guests} guests </p>
</div>
<!-- deposit -->
<div class="flex">
  <ion-icon name="cash-outline"></ion-icon>
  <p class="font text-xs font-light ml-2"> ${price}$ deposit per person </p>
</div>`;

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
      price
    };

    localStorage.setItem("user-info", JSON.stringify(userInfo));
    window.location.href = "../pages/devis.html";
  }
});

function affiche() {
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let regexName = /^[A-Za-z]+$/;

  let regexPhone = /^\+1[0-9]{10}$/;

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
      "Invalid phone number. <br>It should start with '+1' and have 10 digits.";
    infoChecker = false;
    return;
  } else {
    affErrPhone.innerHTML = "";
    infoChecker = true;
  }
}
