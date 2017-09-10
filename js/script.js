var link = document.querySelector(".search-button");
var form = document.querySelector(".search-form");
var arrival = document.querySelector(".arrival-date");
var departure = document.querySelector(".date-of-departure");
var storage = localStorage.getItem("arrival");
var adults = document.querySelectorAll(".adults-number");
var calendar = document.querySelectorAll(".calendar");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("search-form-show");
  form.classList.remove("form-error");
  arrival.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    form.classList.add("form-error");
  }
  else {
    localStorage.setItem("arrival", arrival.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains("search-form-show")) {
      form.classList.toggle("search-form-show");
      form.classList.remove("form-error");
    }
  }
});

function initMap() {
  var uluru = {lat: 34.8741737, lng: -111.7595701};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: {lat: 34.6491367, lng: -111.7617045}
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
};