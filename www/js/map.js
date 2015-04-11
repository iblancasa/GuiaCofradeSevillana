
var map;
var datadir="data/";
var img="img/hermandades/"
var image=null;
var position=null;
var marker=null;
var tmpl=null;
var dia=null;


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


/********VIERNES SANTO********/

dia ="viernessanto";

//Carretería
  image = img+dia+'/carreteria/escudo.png';
  position = new google.maps.LatLng(37.385635,-5.99706);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("carreteria");
  });


//Soledad Sanbuenaventura
  image = img+dia+'/soledadsanbuenaventura/escudo.png';
  position = new google.maps.LatLng(37.38921,-5.997557);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("soledadsanbuenaventura");
  })


//El Cachorro
  image = img+dia+'/cachorro/escudo.png';
  position = new google.maps.LatLng(37.389298,-6.010998);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("cachorro");
  })


//La O
  image = img+dia+'/lao/escudo.png';
  position = new google.maps.LatLng(37.38695,-6.005227);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("lao");
  })


//San Isidoro
  image = img+dia+'/sanisidoro/escudo.png';
  position = new google.maps.LatLng(37.389759,-5.991031);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("sanisidoro");
  })


//Montserrat
  image = img+dia+'/montserrat/escudo.png';
  position = new google.maps.LatLng(37.390176,-5.998827);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("montserrat");
  })


//Mortaja
  image = img+dia+'/mortaja/escudo.png';
  position = new google.maps.LatLng(37.394522,-5.988256);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("mortaja");
  })




/********SÁBADO SANTO********/

dia ="sabadosanto";

//Sol
  image = img+dia+'/sol/escudo.png';
  position = new google.maps.LatLng(37.375949,-5.973465);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("sol");
  });


//Servitas
    image = img+dia+'/servitas/escudo.png';
    position = new google.maps.LatLng(37.396173,-5.987186);
    marker = new google.maps.Marker({
       position: position,
       map: map,
       icon: image
     });

     google.maps.event.addListener(marker, 'click', function() {
     cargar("servitas");
    });


//La Trinidad
    image = img+dia+'/trinidad/escudo.png';
    position = new google.maps.LatLng(37.397282,-5.98148);
    marker = new google.maps.Marker({
       position: position,
       map: map,
       icon: image
     });

     google.maps.event.addListener(marker, 'click', function() {
     cargar("trinidad");
    });


//Santo Entierro
    image = img+dia+'/entierro/escudo.png';
    position = new google.maps.LatLng(37.392804,-5.997111);
    marker = new google.maps.Marker({
       position: position,
       map: map,
       icon: image
     });

     google.maps.event.addListener(marker, 'click', function() {
     cargar("entierro");
    });

//Soledad San Lorenzo
    image = img+dia+'/soledad/escudo.png';
    position = new google.maps.LatLng(37.396943,-5.996793);
    marker = new google.maps.Marker({
       position: position,
       map: map,
       icon: image
     });

     google.maps.event.addListener(marker, 'click', function() {
     cargar("soledadsanlorenzo");
    });




/********DOMINGO RESURRECCIÓN********/
dia = "domingoresurreccion";

//Resurrección
  image = img+dia+'/resurreccion/escudo.png';
  position = new google.maps.LatLng(37.3989816,-5.9877606);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("resurreccion");
  });



}

google.maps.event.addDomListener(window, 'load', initialize);
