const productDetail = document.querySelector(".product-detail");
const productImage = document.querySelector(".product-image");
const productAddress = document.querySelector(".js-address");

const searchData = JSON.parse(localStorage.getItem("searchData"));
const serviceData = JSON.parse(localStorage.getItem("business-data"));

console.log(searchData);



productDetail.innerHTML = `<h2 class="text-4xl font-medium shadow-text product-title">${serviceData.name}</h2> = 
<h3 class="text-3xl font-medium shadow-text mb-4 product-category">${serviceData.categories[0].title}</h3>                
<p class="text-black-600 font-medium text-xl product-desc">
Situé à quelques pas du jardin "Arsa" en médina, Dar Dada Casablanca est un restaurant qui promet bien des surprises. Niché dans un charmant riad, il valorise autant la tradition qu'il ne la réinvente avec malice et brio. Escale pour les férus de déco, Dar Dada Casablanca l'est bien sûr pour les amateurs de bonnes tables dont les papilles, de l'entrée au dessert, seront comblées. Sa large porte en bois passée, Dar Dada Casablanca nous emporte, d'emblée, dans un voyage dans le temps.
</p>`;

productImage.innerHTML = `<img class="h-auto max-w-full product-image" src="${serviceData.image_url}" alt="">`;

productAddress.innerHTML = `<a href="${serviceData.url}" class="text-blue-700 underline">${serviceData.name}</a>
<p><ion-icon class="text-blue-800 text-xl mr-6" name="location-outline"></ion-icon>${serviceData.location.address1} ${serviceData.location.city} ${serviceData.location.city}</p>
<p><ion-icon class="text-blue-800 text-xl mr-6" name="time-outline"></ion-icon>Ouvre à 12:00-15:30
    <p class="ml-24">19:00-01:00</p>
<p class="ml-12">Dimanche Fermé</p></p>
<p><ion-icon class="text-blue-800 text-xl mr-6" name="call-outline"></ion-icon>${serviceData.phone}</p>`;