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
    console.log(categorias);
    for (var i = 0; i < categorias.length; i++) {
        document.getElementById('blog').innerHTML += `
        <section id="${categorias[i].codigo}" class="content-section">
                <div class="section-content" style="margin-top: -50px;background-color: white">
                    <div class="tabs-content">
                        <p class="tituloMediano colorNegro" style="text-align: left;">${categorias[i].titulo}</p>
                        <div class="wrapper">
                            <section id="first-tab-group" class="tabgroup">
                                <div class="row" id="tab${i+1}">
                                    
                                    
                                </div> 
                            </section> 
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



(function(){
    var contenedores = ["tab1","tab2","tab3","tab4","tab5","tab6","tab7","tab8"];
    var plantillas = [
        {nombre:"Plantilla 1",url:"img/blog_1.jpg"},
        {nombre:"Plantilla 2",url:"img/blog_2.jpg"}
    ];
    for (var j = 0; j < contenedores.length; j++) {
        for (var i = 0; i < plantillas.length; i++) {
        document.getElementById(contenedores[j]).innerHTML += `
                    <div class="col-md-6 col-lg-6 col-12">
                        <div class="item">
                            <img src="${plantillas[i].url}" alt="">
                            <div class="text-content">
                                <h4>${plantillas[i].nombre}</h4>
                                <button type="button" class="action-button">Comenzar ahora.</button>
                            </div>
                        </div>
                    </div>`;
    }
}})();