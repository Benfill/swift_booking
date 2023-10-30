// importing data from json file
import restaurants from "./json files/restau-nyc.json" assert { type: "json" };
import event from "./json files/event-nyc.json" assert { type: "json" };


// selecting cards parent by his class name
const card = document.querySelector(".js-card");

// showing cards
for (let i = 0; i < 12; i++) {
  card.innerHTML += `<div class="max-w-sm mx-auto bg-white rounded overflow-hidden shadow-lg">
    <img src="${restaurants.businesses[i].image_url}" alt="Placeholder Image" class="w-full h-48 object-cover">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${restaurants.businesses[i].name}</div>
      <p class="text-gray-700">${restaurants.businesses[i].location.address1} ${restaurants.businesses[i].location.city}</p>
  </div>`;
}

// selecting search btn by his id
const filterBtn = document.getElementById("filter-button");


// getting search values
filterBtn.addEventListener("click", function () {
  const date = document.getElementById("date").value;
  const reservationType = document.getElementById("reservation-type").value;
  const city = document.getElementById("city").value;
  const guests = document.getElementById("guests").value;
  filterList(reservationType, city);
});

// filter function that shows list of what the user searches
function filterList(reservationType, city) {
  card.innerHTML = "";

  switch (reservationType) {
    case "restaurant":
      if (city == "nyc") {
        for (let i = 0; i < 12; i++) {
          card.innerHTML += `<div class="max-w-sm mx-auto bg-white rounded overflow-hidden shadow-lg">
              <img src="${restaurants.businesses[i].image_url}" alt="Placeholder Image" class="w-full h-48 object-cover">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">${restaurants.businesses[i].name}</div>
                <p class="text-gray-700">${restaurants.businesses[i].location.address1} ${restaurants.businesses[i].location.city}</p>
            </div>`;
        }
      } else if (city == "tangier") card.innerHTML = "tanger restau";
      break;

    case "event":
      if (city == "nyc") {
        for (let i = 0; i < 12; i++) {
          card.innerHTML += `<div class="max-w-sm mx-auto bg-white rounded overflow-hidden shadow-lg">
                <img src="${event.businesses[i].image_url}" alt="Placeholder Image" class="w-full h-48 object-cover">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">${event.businesses[i].name}</div>
                  <p class="text-gray-700">${event.businesses[i].location.address1} ${event.businesses[i].location.city}</p>
              </div>`;
        }
      } else if (city === "tangier") card.innerHTML = "tanger event";
      break;
  }
}
