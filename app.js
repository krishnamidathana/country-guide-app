const countryInp = document.getElementById("country-Inp");
const search = document.getElementById("search");
const result = document.getElementById("result");
const wrapper = document.getElementById("wrapper");

search.addEventListener("click", () => {
  let counrtyName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${counrtyName}?fullText=true`;
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img" />
      <h2>${data[0].name.common}</h2>
    <div class="wra">
        <div class="dwra">
            <h4>Capital: <span>${data[0].capital[0]}</span></h4>
        </div>
          <div class="wra">
        <div class="dwra">
            <h4>Continents: <span>${data[0].continents[0]}</span></h4>
        </div>
        <div class="wra">
        <div class="dwra">
            <h4>population: <span>${data[0].population}</span></h4>
        </div>
          <div class="wra">
        <div class="dwra">
            <h4>Currency:
             <span>
            
        ${data[0].currencies[Object.keys(data[0].currencies)].name} - 
         ${Object.keys(data[0].currencies)[0]}
        </span></h4>
        </div>
             <div class="wra">
        <div class="dwra">
            <h4>Common Languages: <span>${Object.values(data[0].languages)
              .toString()
              .split(",")
              .join(",")}</span></h4>
        </div>
    </div>
      
      `;
    })
    .catch(() => {
      if (counrtyName.length == 0) {
        result.innerHTML = `<h3>The input feild cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name</h3>`;
      }
    });
});
