// variable takes the footer html code
const footerHtml = `<div class="container mx-auto flex items-center justify-between">
  <div>
    <p>&copy; 2023 Your Company</p>
  </div>
  <div class="flex space-x-4">
    <a href="#" class="text-white hover:text-gray-500">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 10v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8m11 0l-3-3m0 0l-3 3m3-3V2m0 11H2m10 0v8m0 0l3-3"></path>
      </svg>
    </a>
    <a href="#" class="text-white hover:text-gray-500">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2m-4-2l-6 6m0 0l-6-6m6 6V4"></path>
      </svg>
    </a>
    <!-- Add more social icons as needed -->
  </div>
</div>
`;

// variable takes the header html code
const headerHtml = `<div class="fixed top-0 left-0 right-0 z-10 bg-transparent p-4">
<div class="container mx-auto">
  <nav class="flex items-center justify-between">
    <a href="#" class="text-black text-2xl font-semibold">Your Logo</a>
    <ul class="flex space-x-4">
      <li><a href="#" class="text-black hover:text-gray-600">Home</a></li>
      <li><a href="#" class="text-black hover:text-gray-600">About</a></li>
      <li><a href="#" class="text-black hover:text-gray-600">Services</a></li>
      <li><a href="#" class="text-black hover:text-gray-600">Contact</a></li>
    </ul>
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
