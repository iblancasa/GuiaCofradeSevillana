
var map;
var datadir="./data/";
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






map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

document.getElementById('map-canvas').style.zIndex = "1";
document.getElementById('header').style.zIndex = "10";


$.get('plantillahermandad.html',function (data) {
  tmpl = Handlebars.compile(data);
});


/********VÍSPERAS********/

dia ="visperas";

//San José Obrero
  image = img+dia+'/sanjoseobrero/escudo.png';
  position = new google.maps.LatLng(37.397422,-5.975776);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("sanjoseobrero");
  });


//Torreblanca
  image = img+dia+'/torreblanca/escudo.png';
  position = new google.maps.LatLng(37.383501,-5.899509);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("torreblanca");
  });


//Divino Perdón
  image = img+dia+'/divinoperdon/escudo.png';
  position = new google.maps.LatLng(37.410284,-5.919035);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("divinoperdon");
  });



//Pasión y Muerte
  image = img+dia+'/pasionymuerte/escudo.png';
  position = new google.maps.LatLng(37.377792,-6.004232);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("pasionymuerte");
  });


//La Misión
  image = img+dia+'/lamision/escudo.png';
  position = new google.maps.LatLng(37.356519,-5.984457);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("lamision");
  });


//Pino Montano
  image = img+dia+'/pinomontano/escudo.png';
  position = new google.maps.LatLng(37.4231971,-5.9638876);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("pinomontano");
  });


//Dulce Nombre de Bellavista
  image = img+dia+'/dulcenombre/escudo.png';
  position = new google.maps.LatLng(37.3182,-5.967635);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("dulcenombre");
  });


//Padre Pío
  image = img+dia+'/padrepio/escudo.png';
  position = new google.maps.LatLng(37.371775,-5.940722);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("padrepio");
  });


//Cristo de la Corona
  image = img+dia+'/corona/escudo.png';
  position = new google.maps.LatLng(37.386194,-5.994096);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("corona");
  });



/********DOMINGO DE RAMOS********/

dia ="domingoderamos";

//Despojado
  image = img+dia+'/despojado/escudo.png';
  position = new google.maps.LatLng(37.387876,-5.997907);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("despojado");
  });


//La Paz
  image = img+dia+'/paz/escudo.png';
  position = new google.maps.LatLng(37.374678,-5.983044);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("paz");
  });


//La Cena
  image = img+dia+'/cena/escudo.png';
  position = new google.maps.LatLng(37.394219,-5.987474);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("cena");
  });


//La Hiniesta
  image = img+dia+'/hiniesta/escudo.png';
  position = new google.maps.LatLng(37.39883,-5.985679);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("hiniesta");
  });


//San Roque
  image = img+dia+'/sanroque/escudo.png';
  position = new google.maps.LatLng(37.390861,-5.983952);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("sanroque");
  });


//Estrella
  image = img+dia+'/estrella/escudo.png';
  position = new google.maps.LatLng(37.3838875,-6.0048799);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("estrella");
  });


//La Amargura
  image = img+dia+'/amargura/escudo.png';
  position = new google.maps.LatLng(37.3838875,-6.0048799);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("amargura");
  });


//El Amor
  image = img+dia+'/amor/escudo.png';
  position = new google.maps.LatLng(37.39025,-5.993205);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("amor");
  });




/********LUNES SANTO********/

dia ="lunessanto";

//Polígono de San Pablo
  image = img+dia+'/sanpablo/escudo.png';
  position = new google.maps.LatLng(37.399129,-5.958689);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("sanpablo");
  });


//Redención
  image = img+dia+'/redencion/escudo.png';
  position = new google.maps.LatLng(37.391634,-5.986524);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("redencion");
  });


//Santa Genoveva
  image = img+dia+'/santagenoveva/escudo.png';
  position = new google.maps.LatLng(37.368116,-5.976717);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("santagenoveva");
  });


//Santa Marta
  image = img+dia+'/santamarta/escudo.png';
  position = new google.maps.LatLng(37.394542,-5.994204);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("santamarta");
  });



//San Gonzalo
  image = img+dia+'/sangonzalo/escudo.png';
  position = new google.maps.LatLng(37.380031,-6.010308);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("sangonzalo");
 });


//Vera Cruz
  image = img+dia+'/veracruz/escudo.png';
  position = new google.maps.LatLng(37.395079,-5.998181);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("veracruz");
  });


//Penas de San Vicente
  image = img+dia+'/penas/escudo.png';
  position = new google.maps.LatLng(37.394548,-5.999668);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("penas");
  });


//Las Aguas
  image = img+dia+'/aguas/escudo.png';
  position = new google.maps.LatLng(37.384788,-5.996421);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("aguas");
  });


//El Museo
  image = img+dia+'/museo/escudo.png';
  position = new google.maps.LatLng(37.393008,-5.999705);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("museo");
  });




/********MARTES SANTO********/

dia ="martessanto";

//El Cerro
  image = img+dia+'/cerro/escudo.png';
  position = new google.maps.LatLng(37.371931,-5.957566);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("cerro");
  });


//Los Javieres
  image = img+dia+'/losjavieres/escudo.png';
  position = new google.maps.LatLng(37.399319,-5.991831);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("losjavieres");
  });


//San Esteban
  image = img+dia+'/sanesteban/escudo.png';
  position = new google.maps.LatLng(37.389771,-5.986258);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("sanesteban");
  });


//Los Estudiantes
  image = img+dia+'/estudiantes/escudo.png';
  position = new google.maps.LatLng(37.382062,-5.991809);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("estudiantes");
  });


//San Benito
  image = img+dia+'/sanbenito/escudo.png';
  position = new google.maps.LatLng(37.387694,-5.979771);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("sanbenito");
  });


//La Candelaria
  image = img+dia+'/candelaria/escudo.png';
  position = new google.maps.LatLng(37.388447,-5.989214);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("candelaria");
  });


//La Bofetá
  image = img+dia+'/bofeta/escudo.png';
  position = new google.maps.LatLng(37.397126,-5.997004);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("bofeta");
  });


//Santa Cruz
  image = img+dia+'/santacruz/escudo.png';
  position = new google.maps.LatLng(37.386924,-5.989732);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("santacruz");
  });




/********MIERCOLES SANTO********/

dia ="miercolessanto";

//Carmen Doloroso
  image = img+dia+'/carmendoloroso/escudo.png';
  position = new google.maps.LatLng(37.399089,-5.991669);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("carmendoloroso");
  });


//La Sed
  image = img+dia+'/sed/escudo.png';
  position = new google.maps.LatLng(37.38301,-5.965834);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("sed");
  });


//San Bernardo
  image = img+dia+'/sanbernardo/escudo.png';
  position = new google.maps.LatLng(37.382467,-5.982182);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("sanbernardo");
  });


//Buen Fin
  image = img+dia+'/buenfin/escudo.png';
  position = new google.maps.LatLng(37.398238,-5.99869);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("buenfin");
  });


//La Lanzada
  image = img+dia+'/lanzada/escudo.png';
  position = new google.maps.LatLng(37.396125,-5.993067);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("lanzada");
  });


//El Baratillo
  image = img+dia+'/baratillo/escudo.png';
  position = new google.maps.LatLng(37.386441,-5.997517);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("baratillo");
  });


//Cristo de Burgos
  image = img+dia+'/burgos/escudo.png';
  position = new google.maps.LatLng(37.392467,-5.989923);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("burgos");
  });


//Las Siete Palabras
  image = img+dia+'/sietepalabras/escudo.png';
  position = new google.maps.LatLng(37.394561,-5.998897);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("sietepalabras");
  });


//Los Panaderos
  image = img+dia+'/panaderos/escudo.png';
  position = new google.maps.LatLng(37.393525,-5.993872);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("panaderos");
  });




/********JUEVES SANTO********/

dia ="juevessanto";

//Los Negritos
  image = img+dia+'/negritos/escudo.png';
  position = new google.maps.LatLng(37.390864,-5.984228);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("negritos");
  });


//La Exaltación
  image = img+dia+'/exaltacion/escudo.png';
  position = new google.maps.LatLng(37.394055,-5.98771);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("exaltacion");
  });


//Las Cigarreras
  image = img+dia+'/cigarreras/escudo.png';
  position = new google.maps.LatLng(37.377527,-5.995917);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("cigarreras");
  });


//Monte-Sión
  image = img+dia+'/montesion/escudo.png';
  position = new google.maps.LatLng(37.396867,-5.991324);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("montesion");
  });


//Quinta Angustia
  image = img+dia+'/quintaangustia/escudo.png';
  position = new google.maps.LatLng(37.390427,-5.99815);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("quintaangustia");
  });


//El Valle
  image = img+dia+'/valle/escudo.png';
  position = new google.maps.LatLng(37.392813,-5.992565);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("valle");
  });


//Pasión
  image = img+dia+'/pasion/escudo.png';
  position = new google.maps.LatLng(37.389861,-5.993292);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("pasion");
  });




/********MADRUGÁ********/

dia ="madruga";

//El Silencio
  image = img+dia+'/silencio/escudo.png';
  position = new google.maps.LatLng(37.392765,-5.996692);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("silencio");
  });


//Gran Poder
  image = img+dia+'/granpoder/escudo.png';
  position = new google.maps.LatLng(37.396856,-5.996286);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("granpoder");
  });


//Macarena
  image = img+dia+'/macarena/escudo.png';
  position = new google.maps.LatLng(37.402749,-5.989403);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("macarena");
  });


//El Calvario
  image = img+dia+'/calvario/escudo.png';
  position = new google.maps.LatLng(37.39021,-5.998483);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("calvario");
  });


//El Calvario
  image = img+dia+'/calvario/escudo.png';
  position = new google.maps.LatLng(37.39021,-5.998483);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("calvario");
  });


//Esperanza de Triana
  image = img+dia+'/triana/escudo.png';
  position = new google.maps.LatLng(37.383924,-6.001272);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("triana");
  });


//Los Gitanos
  image = img+dia+'/gitanos/escudo.png';
  position = new google.maps.LatLng(37.394741,-5.984165);
  marker = new google.maps.Marker({
     position: position,
     map: map,
     icon: image
   });

   google.maps.event.addListener(marker, 'click', function() {
   cargar("gitanos");
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
