function updateTime() {
  // Squamish Canada
  let squamishEl = document.querySelector("#squamish");
  let squamishDateEl = squamishEl.querySelector(".date");
  let squamishTimeEl = squamishEl.querySelector(".time");
  let squamishTime = moment().tz("America/Vancouver");
  squamishDateEl.innerHTML = squamishTime.format("ddd MMM Do YYYY");
  squamishTimeEl.innerHTML = squamishTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // London UK
  let londonEl = document.querySelector("#london");
  let londonDateEl = londonEl.querySelector(".date");
  let londonTimeEl = londonEl.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateEl.innerHTML = londonTime.format("ddd MMM Do YYYY");
  londonTimeEl.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");

  //  Paris France
  let parisEl = document.querySelector("#paris");
  let parisDateEl = parisEl.querySelector(".date");
  let parisTimeEl = parisEl.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateEl.innerHTML = parisTime.format("ddd MMM Do YYYY");
  parisTimeEl.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  // Rome Italy
  let romeEl = document.querySelector("#rome");
  let romeDateEl = romeEl.querySelector(".date");
  let romeTimeEl = romeEl.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");
  romeDateEl.innerHTML = romeTime.format("ddd MMM Do YYYY");
  romeTimeEl.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");
}
function updateCity(event) {
  let cityTZ = event.target.value;
  if (cityTZ === "current") {
    cityTZ = moment.tz.guess();
  }
  let cityName = cityTZ.split("/")[1];
  let cityTime = moment().tz(cityTZ);
  let citiesEl = document.querySelector("#cities");
  citiesEl.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("ddd MMM Do YYYY")} </div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss [<small>]A[</small>]")}
      </div>
    </div>
    <a href= "index.html">Home</a>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectEl = document.querySelector("#city");
citiesSelectEl.addEventListener("change", updateCity);
