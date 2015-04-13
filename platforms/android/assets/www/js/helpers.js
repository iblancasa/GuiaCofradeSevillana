



/**
* Devuelve la ruta al escudo de la Hermandad
* @param {String} Ruta a la carpeta
* @returns {String} Ruta al escudo
*/
Handlebars.registerHelper('escudo', function(carpeta) {
  return new Handlebars.SafeString(
    carpeta + "escudo.png"
  );
});

/**
* Devuelve la ruta a la cabecera de la Hermandad
* @param {String} Ruta a la carpeta
* @returns {String} Ruta a la cabecera
*/
Handlebars.registerHelper('cabecera', function(carpeta) {
  return new Handlebars.SafeString(
    carpeta + "cabecera.jpg"
  );
});



/**
* Devuelve la ruta a la imagen del titular
* @param {String} Ruta a la carpeta
* @param {int} Índice del titular
* @returns {String} Ruta a la imagen del titular según corresponda
*/
Handlebars.registerHelper('titular', function(carpeta,indice) {
  var titular = null;

  switch(indice) {
    case 0:
        titular = "primero.png";
        break;
    case 1:
        titular = "segundo.png";
        break;
    case 2:
        titular = "tercero.png";
        break;
    case 3:
        titular = "cuarto.png";
        break;
    }

  return new Handlebars.SafeString(
    carpeta + titular
  );
});
