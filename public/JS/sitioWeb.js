//{codigo:"usuarios",titulo:"Usuarios"},

(function(){
    var categorias = [
        {codigo:"archivos",titulo:"Archivos"},
        {codigo:"paginaPrincipal",titulo:"Página principal"},
        {codigo:"crearPagina",titulo:"Páginas"},
        {codigo:"blog",titulo:"Entradas"},
        {codigo:"comentarios",titulo:"Comentarios"}
    ];
    console.log(categorias);
    for (var i = 0; i < categorias.length; i++) {
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

var imagenes = [
		"img/archives/img/photo1.jpg","img/archives/img/photo2.jpg",
		"img/archives/img/photo3.jpg","img/archives/img/photo4.jpg",
		"img/archives/img/photo5.jpg","img/archives/img/photo6.jpg",
		"img/archives/img/photo7.jpg","img/archives/img/photo8.jpg",
		"img/archives/img/photo9.jpg"
	];

var videos = [
		"img/archives/img/photo5.jpg","img/archives/img/photo5.jpg",
		"img/archives/img/photo7.jpg","img/archives/img/photo8.jpg",
		"img/archives/img/photo9.jpg"
	];

(function(){
	for (var i = 0; i < imagenes.length; i++) {
		document.getElementById('imagenes').innerHTML += `
        			<div class="col-md-4 col-lg-3 col-sm-6 col-xs-6">
                        <div class="item">
                            <span class="icono"><i class="fas fa-images"></i></span>
                            <span class="icono"><i class="fas fa-trash-alt"></i></span>
                            <div class="image">
                                <img src="${imagenes[i]}" alt="" class="img-fluid">
                                <div class="featured-button button">
                                    <a href="#projects">Codigo</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    `;
	}
})();



function mostrarArchivos(){
	var categoria = $('#slc-archivos').val();
	if (categoria == 'imagenes') {
		document.getElementById('imagenes').innerHTML = ' ';
		for (let i = 0; i < 4; i++) {
		document.getElementById('imagenes').innerHTML += `
        			<div class="col-md-4 col-lg-3 col-sm-6 col-xs-6">
                        <div class="item">
                            <span class="icono"><i class="fas fa-images"></i></span>
                            <span class="icono"><i class="fas fa-trash-alt"></i></span>
                            <div class="image">
                                <img src="${imagenes[i]}" alt="" class="img-fluid">
                                <div class="featured-button button">
                                    <a href="#projects">Codigo</a>
                                </div>
                            </div>
                        </div>
                    </div>`;
		}
	}
	if (categoria == 'videos') {
		document.getElementById('imagenes').innerHTML = ' ';
		for (let i = 0; i < videos.length; i++) {
		document.getElementById('imagenes').innerHTML += `
        			<div class="col-md-4 col-lg-3 col-sm-6 col-xs-6">
                        <div class="item">
                            <span class="icono"><i class="fas fa-video"></i></span>
                            <span class="icono"><i class="fas fa-trash-alt"></i></span>
                            <div class="image">
                                <img src="${videos[i]}" alt="" class="img-fluid">
                                <div class="featured-button button">
                                    <a href="#projects">Codigo</a>
                                </div>
                            </div>
                        </div>
                    </div>`;
		}
	}
}