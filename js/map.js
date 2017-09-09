  function initMap() {
  var uluru = {lat: 34.8741737, lng: -111.7595701};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: {lat: 34.6491367, lng: -111.7617045}
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  }