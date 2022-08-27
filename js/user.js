const displayUser = (users) => {
  console.log(users)
  const userConatiner = document.getElementById("users");

  for (const user of users) {
    const div = document.createElement("div");
    const { name, email, phone, picture, location} = user;

    div.innerHTML = `
    <div class="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>
          
        </div>
        <div class="flex flex-col items-center pb-10">
            <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="${picture.large}" alt="Bonnie image">
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${name.title} ${name.first} ${name.last}</h5>
               
            <span class="text-sm text-gray-500 dark:text-gray-400"><img class="inline" src="/img/icons/map-pin.svg"> ${location.city}, ${location.country}</span>
            <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="tel:${phone}" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><img class="inline mr-2" src="/img/icons/phone.svg">Call Me</a>
                <a href="mailto:${email}" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><img class="inline mr-2" src="/img/icons/mail.svg">Mail Me</a>
            </div>
        </div>
    </div>
    `;
    
    userConatiner.appendChild(div);
  }
};

// console.log(name);

const randomUser = () => {
  fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => displayUser(data.results));
};

randomUser();
