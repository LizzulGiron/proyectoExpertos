(function (){
    var tarjetas = [
          {nombre:"JAVASCRIPT",icono:'<i class="fab fa-js-square"></i>',texto:"Javascript es un lenguaje utilizado por profesionales y para quienes se inician en el desarrollo y diseño de sitios web. No requiere de compilación ya que el lenguaje funciona del lado del cliente, los navegadores son los encargados de interpretar estos códigos."},
          {nombre:"CSS3",icono:'<i class="fab fa-css3"></i>',texto:"CSS es un lenguaje de hojas de estilos creado para controlar el aspecto o presentación de los documentos electrónicos definidos con HTML y XHTML. CSS es la mejor forma de separar los contenidos y es imprescindible para crear páginas web."},
          {nombre:"HTML5",icono:'<i class="fab fa-html5"></i>',texto:"HTML es un estándar que sirve de referencia del software que conecta con la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código para la definición de contenido de una página web, como texto, imágenes, videos, juegos."}
          
      ];
      for (var i = 0; i < tarjetas.length; i++) {
        document.getElementById('tarjetas').innerHTML += `
        <div class="col-md-4 col-lg-4 col-sm-12" data-aos="zoom-out">
            <div class="imagenesTarjeta text-center">
              <span class="iconos">
                  ${tarjetas[i].icono}
              </span>
              <p class="tituloPequeño centrar">${tarjetas[i].nombre}</p>
              <p class="texto">
                ${tarjetas[i].texto}
              </p>
            </div>
        </div>`;}
})();

(function (){
    var registrosGaleria = [
          {nombre:"Blog",url:"IMG/CATEGORIES/photo02.jpg",classAll:"all 2"},
          {nombre:"Tienda en linea",url:"IMG/CATEGORIES/photo04.jpg",classAll:"all 1"},
          {nombre:"Diseño",url:"IMG/CATEGORIES/photo05.jpg",classAll:"all 1"},
          {nombre:"Fotografía",url:"IMG/CATEGORIES/photo06.jpg",classAll:"all 2"},
          {nombre:"Viajes",url:"IMG/CATEGORIES/photo01.jpg",classAll:"all 2"},
          {nombre:"Música",url:"IMG/CATEGORIES/photo03.jpg",classAll:"all 1"}
      ];
      for (var i = 0; i < registrosGaleria.length; i++) {
        document.getElementById('gallery').innerHTML += `
        <div class="mb-3 pics animation ${registrosGaleria[i].classAll}">
          <span class="tituloMuyPequeño">${registrosGaleria[i].nombre}</span>
          <img class="img-fluid" src="${registrosGaleria[i].url}" alt="Card image cap">
        </div>`;}
})();

(function (){
    var pagos = [
          {nombre:"Gratis",precio:"$0",servicios : ["1 GB de espacio de almacenamiento","10 cuenta de correo","5 subdominios gratis","Soporte técnico 24/7"]},
          {nombre:"Básico",precio:"$9.99",servicios : ["10 GB de espacio de almacenamiento","10 cuenta de correo","10 subdominios gratis","Soporte técnico 24/7"]},
          {nombre:"Premiun",precio:"$15.99",servicios : ["40 GB de espacio de almacenamiento","30 cuenta de correo","20 subdominios gratis","Soporte técnico 24/7"]}
          
      ];
      console.log(pagos);
      for (var i = 0; i < pagos.length; i++) {
        document.getElementById('pagos').innerHTML += `
        <div class="col-md-4 col-lg-4 col-sm-12" data-aos="zoom-out">
            <div class="imagenesTarjeta text-center">
              <div style="background-color: #f4f4f4">
                <p class="tituloMediano centrar colorNaranja" style="background-color: #f4f4f4">${pagos[i].nombre}</p>
                <p ><span class="tituloPequeño">${pagos[i].precio}</span></p>
              </div>
              <div id="div-${pagos[i].nombre}"></div>
              <button type="button" class="action-button">Registrarse</button>
              </p>
            </div>
        </div>`;
      var servicios = pagos[i].servicios;
      for (var j = 0; j < servicios.length; j++) {
        document.getElementById('div-'+pagos[i].nombre).innerHTML += `<p>${servicios[j]}</p>`;
      }
      }
})();


