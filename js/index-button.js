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