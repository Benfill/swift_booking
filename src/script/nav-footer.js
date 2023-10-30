// variable takes the footer html code
const footerHtml = `<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
<div class="md:flex md:justify-between">
  <div class="mb-6 md:mb-0">
      <a href="https://flowbite.com/" class="flex items-center">
          <span class="self-center text-2xl font whitespace-nowrap dark:text-white text-black text-3xl font-bold">SwiftBooking</span>
      </a>
  </div>
  <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
      <div>
          <h2 class="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
          <ul class="text-gray-500 text-black">
              <li class="mb-2">
                  <a href="https://flowbite.com/" class="hover:underline">Restaurant Reservation</a>
              </li>
              <li>
                  <a href="https://tailwindcss.com/" class="hover:underline">Event Venue Reservation</a>
              </li>
          </ul>
      </div>
      <div  class="ml-20">
          <h2 class="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
          <ul class="text-gray-500 text-black ">
              <li class="mb-4">
                  <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Help and Support</a>
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

// variable takes the header html code
const headerHtml = `<div class="navbar fixed top-0 left-0 right-0 z-10 p-4">
  <div class="container mx-auto">
    <nav class="flex flex-wrap items-center justify-between">
      <a href="../index.html" class="logo text-white text-3xl font-bold">SwiftBooking</a>
      <div class="block lg:hidden">
        <button id="menuButton" class="text-white hover:text-gray-600">
             <div class="container bg-blue-700 px-1 rounded-lg" style="">
                <ion-icon name="menu" ></ion-icon>
            </div>
        </button>
      </div>
      <ul id="menuList" class="hidden lg:flex space-x-6 content-around text-white font font-bold">
        <li><a href="#" class="hover:text-gray-600">Service</a></li>
        <li><a href="#" class="hover:text-gray-600">Testimonials</a></li>
        <li><a href="#" class="hover:text-gray-600">Reservation</a></li>
        <li><a href="#" class="hover:text-gray-600">Contact</a></li>
      </ul>
      <div class="hidden lg:flex">
        <button class="bg-blue-700 text-white py-2 px-8 rounded-lg font font-bold">Sign in</button>
      </div>
    </nav>
  </div>
</div>


`;

// variable takes the footer element
const footerElm = document.getElementsByClassName("js-footer");

// variable takes the header element
const headerElm = document.getElementsByClassName("js-header");

// loop adds header and footer in every page
for (let i = 0; i < headerElm.length; i++) {
  headerElm[i].innerHTML = headerHtml;
  footerElm[i].innerHTML = footerHtml;
}
