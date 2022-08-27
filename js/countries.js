const displayCountry = (countries) => {
  const countriesContainer = document.getElementById("countries");
//   console.log(countries[0])

  countries.forEach((country) => {
    const div = document.createElement("div");
    div.innerHTML = `

        <div
        class="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center h-full">
       
            <img class="rounded-t-lg drop-shadow w-full object-cover h-40" src="${
              country.flags.svg
            }" alt="">
        
        <div class="p-5">
            
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-700 dark:text-white">${
                  country.name.common
                }</h5>
          
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${
              country.capital ? country.capital[0] : "No Capital"
            }</p>

            <div class="flex mt-4 space-x-3 md:mt-6 items-center justify-center">
            <a href="${
              country.maps.googleMaps
            }" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><img class="inline mr-2" src="/img/icons/map-pin.svg">Get Location</a>

                <button type="button"  type="button" data-modal-toggle="popup-modal" onclick="getCountryDetails('${country.cca2}')" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><img class="inline mr-2" src="/img/icons/info.svg">More Info</button>
            </div>



            

        </div>
    </div>`;
    countriesContainer.appendChild(div);
  });
};


const getCountryDetails = (code) => {
    fetch('https://restcountries.com/v3.1/alpha/'+code)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (countryData) => {
    console.log(countryData)
}


const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};

loadCountries();
