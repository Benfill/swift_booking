// variable takes the home header html code
const homeHeaderHtml = `<div id="navbar" class="navbar fixed top-0 left-0 right-0 z-10 p-4">
<div class="container mx-auto">
  <nav class="flex flex-wrap items-center justify-between">
    <a href="../../index.html" class="logo text-white text-3xl font-bold">SwiftBooking</a>
    <div class="lg:hidden">
			<button id="navbar-burger"  class="navbar-burger flex items-center text-white-600 p-3">
      <svg class="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="fill: black;">
      <title>Mobile menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
			</button>
	</div>
    <ul id="menuList" class="hidden lg:flex space-x-6 content-around text-white font-bold">
      <li><a href="src/pages/services.html" class=" hover:text-gray-600">Service</a></li>
      <li><a href="src/pages/testemonials.html" class="hover:text-gray-600">Testimonials</a></li>
      <li><a href="src/pages/reservation.html" class="hover:text-gray-600">Reservation</a></li>
      <li><a href="src/pages/contact.html" class="hover:text-gray-600">Contact</a></li>
    </ul>
    <div class=" hidden lg:flex">
      <a href="src/pages/login.html"><button class="  font bg-blue-700 text-white py-2 px-8 rounded-lg font-bold">Sign in</button></a>
    </div>
  </nav>
</div>
</div

<!-- Add the mobile menu items here -->
    <div id="mobile-menu" class="mobile-menu ">
      <a href="src/pages/services.html">Service</a>
      <a href="src/pages/testemonials.html">Testimonials</a>
      <a href="src/pages/reservation.html">Reservation</a>
      <a href="src/pages/contact.html">Contact</a>
      <a href="src/pages/login.html"><button class=" btn font bg-blue-700 text-white py-2 px-8 rounded-lg font-bold">Sign in</button></a>
    </div>
`;

// variable takes the home footer html code
const homeFooterHtml = `<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
<div class="md:flex md:justify-between">
  <div class="mb-6 md:mb-0">
      <a href="index.html" class="flex items-center">
          <span class="self-center text-2xl logo whitespace-nowrap dark:text-white text-black text-3xl font-bold">SwiftBooking</span>
      </a>
  </div>
  <div class=" font grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
      <div>
          <h2 class="  mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
          <ul class="text-gray-500 text-black">
              <li class="mb-2">
                  <a href="src/pages/services.html" class="hover:underline">Restaurant Reservation</a>
              </li>
              <li>
                  <a href="#" class="hover:underline">Event Venue Reservation</a>
              </li>
          </ul>
      </div>
      <div  class="ml-20">
          <h2 class="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
          <ul class="text-gray-500 text-black ">
              <li class="mb-4">
                  <a href="src/pages/contact.html" class="hover:underline ">Help and Support</a>
              </li>
          </ul>
      </div>
      
  </div>
</div>
<div class="sm:flex sm:items-center sm:justify-between">
  <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
      <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARtJREFUSEvt1y9LBUEUBfDf+wIKNhEUxGBRBKvBP8FiNQgifgej1WZSzEaDn8CmIFZNBotBES0GMZmUgVkYFp67D2bZx+q0geUczjn33rnb09LptcRrqIgnMZ3ZiUc8pZhlxeN4IbsT35jAa0FeJl7GZWa1BdwKrjpD/IVD3OMtqprDceJedsWhJtbwUIpoCddNEq/2qYtGiT8xkqiax1HsilEsNKX4FosJ+Dk2+3RF1oxvECwtzgXWO0f8jJ2o6gN3pYzH4n0DezkzDm0zW2O6HWC/DeIzbOUkfsdJBAwvzmkCvo2ZeN/FVE7i1OW/UdX/irs/uRrJeNBlr247VS57Qc0g6+1vszp1pnK9rTGC83wyVH8SeSRVoPwAKWhhH7pX+W8AAAAASUVORK5CYII="/>
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAmpJREFUSEvl1knozVEUwPHPXxaKMiwMCSGhEFmYx9iQqVhYkaEsLNggw8aQMmXBgkgpKzamjYV5LBkyZCxKyJDEwoZ09Pvr9et3f+89T/2Vu3mv+zvnfO859wy3SQutphbi+ufB3dAPrapE6Due4U21SJZ53BXbMR0dqxnKff+E01iVOkQKPAtH0LZOYF78K+bjVP5DEbgLHqN9g9Bm9Y/oj/j9vYrAB7GoAehztEavChsHsLQMHApxP+3+EHwHwzLdexiU/f+CDvjRbDfvcU+8rAINj7bhCUJ+JOYgkrESfBtDK2x1xvsUeDhuloBXYyeibCpX5EPsL8ZTfMPgnEx4/yAFnoDzCfBy7MUAzMPYTO4SjmYJuQsrE/oRmRsp8FScKVC8koEiO/dgSk4mdOJgcU13s8PlzYzGtXrBC3AY67A54dFabMUmrC+QGYOr9YIjrOF1dKNpCfAJROOZm4U+LzYecS2/Vj6rJ+FsgeHJOJd1oGihRes4ZpeAJ+JCChwfA5Bfy7APa7JwFoEj46PMtiDCnl/jcLlecGRjZGUf7MaMnNXwdgU+4BG6F4BH4XoKHKe6mAhlczn1zsI5IpMLY8fwAvvzrbHCVvSIWynwkKwcEmwRzh2VrS8TrGwgKd1oKPdT4JhMb1Oa2X5MriibqNlomVGfMxGPhbIV4X+dAsf+q8QdVbFb+vkzOpUNidDegI2NUAp0Y9QuqdwvmscxGh9mb6y/wQ9v+9byEAhYD0SJNM/WRg4Qj4pDeQNlj7022TRaWMPrMm83Bv5JxLQqLM9a3tWR6QPrdDmu6l2ZTi3gOpm1if9/4J9oyHEfOQrU/wAAAABJRU5ErkJggg=="/>
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAV9JREFUSEvt179LV2EUx/GX0BAIIWhSSA02GIS4uUX5D1R/hlRQzToJOiqC4uTmHyCEm6Dg1CyBoAQKoaWLo4MoB54Lj1cJv3zv917BzvY8l3Pe93zOeX51aci6GuK6U+DnGKxYiV84yGOWM36K31SuxAUGcFjAy+C32Kg42yLcGDZbAe/iGR62+UMtgd/hO7qxhjdtwG8N/oMnGWgcS3WAz9GL0wSbxbc6wMFYxzJe4TN66gK3wbnmeusah+eHTOovabySVIjvo4gGnMMW/uI1phBLM7eWwI9xkrwX8AnTmExzUYI9nJUgD7CNl9l8peAi7jCOcJyBPmKxk+BVvEesghH8TLAow49OgR9lPRCMCcwkWBw2+50Cv0g1LuLP42sa9JWkb6nG/ZnzTc01hJ0sq9jZorZh0ZjR5YX9B19ZgeXz+P5J3dheXRu4scteZNjI9bZKaf8Z6069JGrJ+hJQKIAfFGduPAAAAABJRU5ErkJggg=="/>
      </a>
  </div>
  <span class="mt-14 text-sm text-gray-500 sm:text-center text-black">© 2023 <a href="https://flowbite.com/" class="hover:underline">SwiftBooking</a>. All Rights Reserved.
  </span>
</div>
</div>`;

// variable takes the home header element
const homeHeaderElm = document.querySelector(".js-index-header");

// variable takes the home footer element
const homeFooterElm = document.querySelector(".js-index-footer");

homeHeaderElm.innerHTML = homeHeaderHtml;
homeFooterElm.innerHTML = homeFooterHtml;

// selecting search btn by his id
const filterBtn = document.getElementById("filter-button");
const date = document.getElementById("date");
const reservationType = document.getElementById("reservation-type");
const city = document.getElementById("city");
const guests = document.getElementById("guests");
date.value = "2023-11-03";
guests.value = 2;
let searchData;
// getting search values
filterBtn.addEventListener("click", function () {
  searchData = {
    date: date.value,
    reservationType: reservationType.value,
    city: city.value,
    guests: guests.value,
    time: 0,
  };
  localStorage.setItem("searchData", JSON.stringify(searchData));
  window.location.href = "./src/pages/services.html";
});

// Navbar change color on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    // User has scrolled, change the navbar color to your desired class
    navbar.classList.remove("navbar");
    navbar.classList.add("bg-blue-700"); // Change this class to the color you want
  } else {
    // User is at the top, reset the navbar color
    navbar.classList.remove("bg-blue-700");
    navbar.classList.add("navbar");
  }
});
