// importing data from json file
import restaurant_nyc from "./json files/restau-nyc.json" assert { type: "json" };
import event_nyc from "./json files/event-nyc.json" assert { type: "json" };
import restaurant_la from "./json files/restau-la.json" assert { type: "json" };
import event_la from "./json files/event-la.json" assert { type: "json" };
import restaurant_atlanta from "./json files/restau-atlanta.json" assert { type: "json" };
import event_atlanta from "./json files/event-atlanta.json" assert { type: "json" };

// objects for spliting each service with its city
const nyc = { restaurant: restaurant_nyc, event: event_nyc };
const la = { restaurant: restaurant_la, event: event_la };
const atlanta = { restaurant: restaurant_atlanta, event: event_atlanta };
let cityChecker;

// selecting cards parent by his class name
const card = document.querySelector(".js-card");

// showing cards
for (let i = 0; i < 2; i++) {
  showingList(i, "restaurant", nyc);
  showingList(i, "event", la);
  showingList(i, "restaurant", la);
  showingList(i, "event", atlanta);
  showingList(i, "event", nyc);
  showingList(i, "restaurant", atlanta);
}

// selecting search btn by his id
const filterBtn = document.getElementById("filter-button");
const date = document.getElementById("date");
const reservationType = document.getElementById("reservation-type");
const city = document.getElementById("city");
const guests = document.getElementById("guests");

// getting search values
filterBtn.addEventListener("click", function () {
  filterList(reservationType.value, city.value);
});

// filter function that shows list of what the user searches
function filterList(reservationType, city) {
  card.innerHTML = "";

  switch (reservationType) {
    case "restaurant":
      if (city == "nyc") {
        cityChecker = nyc;
        for (let i = 0; i < 12; i++) {
          showingList(i, "restaurant", nyc);
        }
      } else if (city == "tangier") {
        cityChecker = la;
        for (let i = 0; i < 12; i++) {
          showingList(i, "restaurant", la);
        }
      } else if (city == "casa") {
        cityChecker = atlanta;
        for (let i = 0; i < 12; i++) {
          showingList(i, "restaurant", atlanta);
        }
      }
      break;

    case "event":
      if (city == "nyc") {
        for (let i = 0; i < 12; i++) {
          showingList(i, "event", nyc);
        }
      } else if (city === "tangier") {
        for (let i = 0; i < 12; i++) {
          showingList(i, "event", la);
        }
      } else if (city === "casa") {
        for (let i = 0; i < 12; i++) {
          showingList(i, "event", atlanta);
        }
      }
      break;
  }
}

// showingList is a function shows the service list dpending on params
function showingList(index, service, city) {
  if (service == "restaurant") {
    card.innerHTML += `<div class="max-w-sm mx-auto bg-white rounded overflow-hidden shadow-lg">
    <img src="${city.restaurant.businesses[index].image_url}" alt="Placeholder Image" class="w-full h-48 object-cover">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${city.restaurant.businesses[index].name}</div>
      <p class="text-gray-700">${city.restaurant.businesses[index].location.address1} ${city.restaurant.businesses[index].location.city}</p>
  </div>`;
  } else {
    card.innerHTML += `<div class="max-w-sm mx-auto bg-white rounded overflow-hidden shadow-lg">
    <img src="${city.event.businesses[index].image_url}" alt="Placeholder Image" class="w-full h-48 object-cover">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${city.event.businesses[index].name}</div>
      <p class="text-gray-700">${city.event.businesses[index].location.address1} ${city.event.businesses[index].location.city}</p>
  </div>`;
  }
}

// function pagination(page) {
//   if (page === 1) {
//     for (let i = 0; i < 12; i++) showingList(i, reservationType.value, cityChecker);
//   } else if (page === 2) {
//     for (let i = 12; i < 20; i++) showingList(i, reservationType.value, cityChecker);
//   }
// }

// const page_1 = document.querySelector(".pagination-1");
// const page_2 = document.querySelector(".pagination-2");
// const page_3 = document.querySelector(".pagination-3");

// page_1.addEventListener("click", () => {
//   pagination(1);
// });
// page_2.addEventListener("click", () => {
//   pagination(2);
// });
// page_3.addEventListener("click", () => {
//   pagination(3);
// });

