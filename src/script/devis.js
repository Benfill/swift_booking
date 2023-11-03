console.log(JSON.parse(localStorage.getItem("business-data")));
console.log(JSON.parse(localStorage.getItem("searchData")));
console.log(JSON.parse(localStorage.getItem("user-info")));

const userInfo = JSON.parse(localStorage.getItem("user-info"));
const searchData = JSON.parse(localStorage.getItem("searchData"));
const businessData = JSON.parse(localStorage.getItem("business-data"));
const userInfoElm = document.querySelector(".user-info");
const reservationElm = document.querySelector(".reservation-data");



if (userInfo) {
    let tax = Math.round(userInfo.price * 0.2);
    let total = userInfo.price * searchData.guests + tax;
    userInfoElm.innerHTML = `<div class="mt-48 text-sm font-bold "> 
    <p>${userInfo.firstName}</p>
    <p>${userInfo.lastName}</p>
    <p>${userInfo.email}</p>
    <p>${userInfo.phone}</p>
  </div>
  <div class="mt-52 text-sm font-bold text-blue-600">
    <p>Devis N°</p>
    <p>Date du devis</p>
    <p>Commande N°</p>
  </div>
  <div class="mt-52 text-sm font-bold">
    <p>MA-002</p>
    <p>04/11/2023</p>
    <p>1630/2023</p>`;
    reservationElm.innerHTML = `<p>${searchData.guests}</p>
    <p>${businessData.name}, ${businessData.location.city}</p>
    <p>${userInfo.price}<br></br>TVA 20%<br></br>Total du devis</p>
    <p>${userInfo.price * searchData.guests}<br></br>${tax}<br></br>${total}$</p>`;
} else {
    document.querySelector("main")
    .innerHTML = "<div class='cancel-main'>Nothing in reservation please go home<div/>";
}

const printBtn = document.querySelector(".print");

printBtn.addEventListener("click", ()=> {
    window.print();
});