(function(){
    var categorias = [
        {codigo:"negocios",titulo:"Negocios"},
        {codigo:"tienda",titulo:"Tienda en línea"},
        {codigo:"fotografia",titulo:"Fotografía"},
        {codigo:"musica",titulo:"Música"},
        {codigo:"video",titulo:"Video"},
        {codigo:"disenio",titulo:"Diseño"},
        {codigo:"eventos",titulo:"Eventos"},
        {codigo:"viaje",titulo:"Viaje"}
    ];
    
    for (var i = 0; i < categorias.length; i++) {
        document.getElementById('projects').innerHTML += `
        <section id="${categorias[i].codigo}" class="content-section">
                <div class="section-heading">
                    <h1 class="tituloGrande colorNaranja">${categorias[i].titulo}</h1>
                </div>
                <div class="section-content">
                    <div class="owl-carousel owl-theme" id = "plantillas-${categorias[i].codigo}">
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_3.jpg" alt="">
                                <div class="featured-button button">
                                    <a href="#projects">Editar</a>
                                </div>
                            </div>
                            <div class="text-content">
                                <h4>Nombre de la plantilla</h4>
                                <span>00/00/0000</span>
                            </div>
                            <div class="accent-button button">
                                <a href="#contact">Comenzar ahora.</a>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_2.jpg" alt="">
                                <div class="featured-button button">
                                    <a href="#projects">Editar</a>
                                </div>
                            </div>
                            <div class="text-content">
                                <h4>Nombre de la plantilla</h4>
                                <span>00/00/0000</span>
                            </div>
                            <div class="accent-button button">
                                <a href="#contact">Comenzar ahora.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;
        document.getElementById('enlaces').innerHTML += `
        <li>
            <a href="#${categorias[i].codigo}">
                <span class="rect"></span>
                <span class="circle"></span>
                ${categorias[i].titulo}
            </a>
        </li>`;
    }
})();



