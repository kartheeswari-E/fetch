function display(countries){
    countries.forEach((country) => {
      document.body.innerHTML+=`<div class="container">
      <img src="${country.flags.svg}">
      <div class="info">
          <h3><span>counry-name:</span>${country.name.common}</h3>
          <p><span>population:</span>${country.population}</p>
          <p><span> region:</span>${country.region}</p>
          <p><span>capital:</span>${country.capital}</p>
              </div>
              <a href="https://openweathermap.org/city/1269750+1">
              <input type="button" value="check wheather">
              </a>
                </div>`
         
          });
     }
    
    fetch("https://restcountries.com/v3.1/all")
    .then((data)=> data.json())
    .then((countries)=>console.log(display(countries)))
    