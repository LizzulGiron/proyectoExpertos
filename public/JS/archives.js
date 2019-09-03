var imagenes = [
		"img/archives/img/photo1.jpg","img/archives/img/photo2.jpg",
		"img/archives/img/photo3.jpg","img/archives/img/photo4.jpg",
		"img/archives/img/photo5.jpg","img/archives/img/photo6.jpg",
		"img/archives/img/photo7.jpg","img/archives/img/photo8.jpg",
		"img/archives/img/photo9.jpg"
	];

var videos = [
		"img/archives/img/photo4.jpg","img/archives/img/photo5.jpg",
		"img/archives/img/photo7.jpg","img/archives/img/photo8.jpg",
		"img/archives/img/photo9.jpg"
	];

(function(){
	for (var i = 0; i < imagenes.length; i++) {
		document.getElementById('tab1').innerHTML += `
        			<div class="col-md-4 col-lg-3 col-sm-6 col-xs-6" style="padding-left:0px;padding-right:0px;">
                        <div class="item">
                            <div class="image">
                                <img src="${imagenes[i]}" alt="" class="img-fluid">
                                <div class="featured-button button">
                                    <a href="#projects">
                                        Codigo
                                        <span class="icono"><i class="fas fa-images"></i></span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>`;
    }

    for (var i = 0; i < videos.length; i++) {
        document.getElementById('tab2').innerHTML += `
                    <div class="col-md-4 col-lg-3 col-sm-6 col-xs-6" style="padding-left:0px;padding-right:0px;">
                        <div class="item">
                            <div class="image">
                                <img src="${videos[i]}" alt="" class="img-fluid">
                                <div class="featured-button button">
                                    <a href="#projects">
                                        Codigo
                                        <span class="icono"><i class="fas fa-video"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>`;
    }
})();
