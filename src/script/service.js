const productDetail = document.querySelector(".product-detail");
const productImage = document.querySelector(".product-image");
const productAddress = document.querySelector(".js-address");

const searchData = JSON.parse(localStorage.getItem("searchData"));
const serviceData = JSON.parse(localStorage.getItem("business-data"));

function categories() {
  let categories = "";
  for (let i = 0; i < serviceData.categories.length; i++) {
    categories += ` ${serviceData.categories[i].title}`;
  }
  return categories;
}

function price () {
  console.log(serviceData.price);
  if (serviceData.price === undefined) return "$$";
  else return serviceData.price;
}

console.log(serviceData);

productDetail.innerHTML = `<h2 class="text-4xl font-medium shadow-text product-title">${
  serviceData.name
}</h2>
<h3 class="text-3xl font-medium shadow-text mb-4 product-category">${categories()} (${
  price ()
})</h3>                
<p class="text-black-600 font-medium text-xl product-desc">
Experience a culinary journey like no other at ${serviceData.name}. This exquisite establishment offers a delightful blend of flavors, ambiance, and service, making it a must-visit dining destination for food enthusiasts of all tastes and preferences.

${serviceData.name} is dedicated to delivering an unforgettable dining experience, regardless of your culinary desires. Whether you're seeking a cozy, intimate dinner for two or a vibrant atmosphere for a group celebration, this restaurant has you covered.

Nestled in the heart of ${serviceData.location.city}, ${serviceData.name} is conveniently located at ${serviceData.location.address1}, making it an easily accessible dining destination for both locals and visitors. The restaurant's warm and inviting decor sets the stage for a memorable meal, while the attentive staff ensures that your dining experience is nothing short of exceptional.</p>`;

productImage.innerHTML = `<img class="max-h-96 max-w-full product-image" src="${serviceData.image_url}" alt="">`;

productAddress.innerHTML = `<a href="${serviceData.url}" class="text-blue-700 underline">${serviceData.name}</a>
<p><ion-icon class="text-blue-800 text-xl mr-6" name="location-outline"></ion-icon>${serviceData.location.address1} ${serviceData.location.city} ${serviceData.location.city}</p>
<p><ion-icon class="text-blue-800 text-xl mr-6" name="time-outline"></ion-icon>Ouvre à 12:00-15:30
    <p class="ml-24">19:00-01:00</p>
<p class="ml-12">Dimanche Fermé</p></p>
<p><ion-icon class="text-blue-800 text-xl mr-6" name="call-outline"></ion-icon>${serviceData.phone}</p>`;

const reservationBtn = document.querySelector(".js-reserver-btn");
const time = document.querySelector("#selectedTime");
const date = document.querySelector("#selectedDate");

if (searchData) date.value = searchData.date;

reservationBtn.addEventListener("click", () => {
  if (date.value == "") {
    reservationBtn.style.backgroundColor = "red";
    setTimeout(() => {
      reservationBtn.style.backgroundColor = "#1D4ED8";
    }, 3000);
  } else {
    searchData.date = date.value;
    searchData.time = time.value;
    localStorage.setItem("searchData", JSON.stringify(searchData));
    localStorage.setItem("reservedData", JSON.stringify(serviceData));
    window.location.href = "./reservation.html";
  }
  console.log(searchData);
});
