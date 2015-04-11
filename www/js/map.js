
var map;
var datadir="data/";
var img="img/hermandades/"
var image=null;
var position=null;
var marker=null;
var tmpl=null;


function initialize() {
var mapOptions = {
  zoom: 15,
  center: new google.maps.LatLng(37.3890118,-5.9842985)
};


function cargar(hermandad){
  var archivo = datadir+hermandad+".json";

  var xhr = $.ajax({
  url: archivo
  });

  xhr.done(function (data) {
    var ctx = data;
    var html = tmpl(ctx);
    $("#hermandad").html(html);
    $( "#cerrar" ).click(function() {
      $("#hermandad").fadeOut(500);
    });
    $("#hermandad").fadeIn( "slow");
  });
}




map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

document.getElementById('map-canvas').style.zIndex = "1";
document.getElementById('header').style.zIndex = "10";


var stemplate =  $.ajax({
  url: 'plantillahermandad.html'
});

stemplate.done(function (data) {
  tmpl = Handlebars.compile(data);
});



  var image = img+'domingoresurreccion/resurreccion/escudo.png';
  var position = new google.maps.LatLng(37.3989816,-5.9877606);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("resurreccion");
  });








   image = 'img/hermandades/madruga/triana/escudo.png';
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
