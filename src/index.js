function updateTime() {
  // Squamish Canada
  let squamishEl = document.querySelector("#squamish");
  let squamishDateEl = squamishEl.querySelector(".date");
  let squamishTimeEl = squamishEl.querySelector(".time");
  let squamishTime = moment().tz("America / Vancouver");
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
updateTime();
setInterval(updateTime, 1000);
