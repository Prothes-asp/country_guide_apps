let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2 class="text-dark text-uppercase mb-4 fntFmily txtSpace">${data[0].name.common}</h2>
        <h4 class="text-dark fntFmily d-inline">Coat-Of-Arms: </h4><img src="${data[0].coatOfArms.svg}" class="coatOfArm">

        <div class="mb-2">
          <h4 class="text-dark fntFmily d-inline">Capital: </h4>
          <span class="text-dark">${data[0].capital[0]}</span>
        </div>

        <div class="mb-2">
          <h4 class="text-dark fntFmily d-inline">Borders: </h4>
          <span class="text-dark">
          ${Object.values(data[0].borders)
            .toString()
            .split(",")
            .join(", ")}
          </span>
        </div>

        <div class="mb-2">
          <h4 class="text-dark fntFmily d-inline">Continent: </h4>
          <span class="text-dark">${data[0].continents[0]}</span>
        </div>

        <div class="mb-2">
          <h4 class="text-dark fntFmily d-inline">Time-Zones: </h4>
          <span class="text-dark">${data[0].timezones[0]}</span>
        </div>

        <div class="mb-2">
          <h4 class="text-dark fntFmily d-inline">Country Domain:</h4>
          <span class="text-dark">${data[0].tld[0]}</span>
        </div>

        <div class="mb-2">
          <h4 class="text-dark fntFmily d-inline">Latitude-Longitude:</h4>
          <span class="text-dark">
            ${Object.values(data[0].latlng)
            .toString()
            .split(",")
            .join(", ")}
          </span>
        </div>

        <div class="mb-2">
          <h4 class="text-dark fntFmily d-inline">Population:</h4>
          <span class="text-dark">${data[0].population}</span>
        </div>

        <div class="mb-2">
          <h4 class="text-dark fntFmily d-inline">Area:</h4>
          <span class="text-dark">${data[0].area}</span>
          <span class="text-dark">&#13218;</span> 
        </div>

        <div class="mb-2">
          <h4 class="text-dark fntFmily d-inline">Currency:</h4>
          <span class="text-dark">${
            data[0].currencies[Object.keys(data[0].currencies)].name
            } - ${Object.keys(data[0].currencies)[0]}
          </span>
        </div>

        <div class="mb-2">
          <h4 class="text-dark fntFmily d-inline">Common Languages:</h4>
          <span class="text-dark">${Object.values(data[0].languages)
            .toString()
            .split(",")
            .join(", ")}
          </span>
        </div>

        <div class="mb-2">
          <h4 class="text-dark fntFmily d-inline">Start Of Week:</h4>
          <span class="text-dark">
            ${Object.values(data[0].startOfWeek).toString().split("").join("")}
          </span> 
        </div>

      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3 class="text-danger fntFmily">The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3 class="text-warning fntFmily">Please enter a valid country name.</h3>`;
      }
    });
});



// Form Validation Send Button with Sweet alert 
// This Script you can uses when you jquary cdn link in head tag
// This cdn is    :  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"></script>
$("#search-btn").click(function(){
  var txt = $("#country-inp").val();

  if(txt == ''){
      swal({
          title: "Fields Empty",
          text: "Please write a message",
          icon: "warning",
          button: "Ok",
        });
  }
  else{
      swal({
          title: "Success",
          text: "Click ok Button",
          icon: "success",
          button: "Ok",
        });
  }
});