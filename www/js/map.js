var map;
function initialize() {
var mapOptions = {
  zoom: 15,
  center: new google.maps.LatLng(37.3890118,-5.9842985)
};
map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

document.getElementById('map-canvas').style.zIndex = "1";
document.getElementById('header').style.zIndex = "10";


var image = 'img/hermandades/madruga/triana/escudo.png';
  var sevilla = new google.maps.LatLng(37.384,-6.001351);
  var giralda = new google.maps.Marker({
    position: sevilla,
    map: map,
    icon: image
  });

  google.maps.event.addListener(giralda, 'click', function() {
  $("#hermandad").fadeIn( "slow");
});





}

google.maps.event.addDomListener(window, 'load', initialize);
