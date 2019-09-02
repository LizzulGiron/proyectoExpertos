(function(){
    var enlaces = [
        {categoria:'usuarios',url:'administracion.html',descripcion:'Usuarios'},
        {categoria:'usuarios',url:'createUsers.html',descripcion:'Nuevo'},
        {categoria:'configuracion',url:'archives.html',descripcion:'Archivos'},
        {categoria:'configuracion',url:'pagePrincipal.html',descripcion:'Principal'},
        {categoria:'configuracion',url:'pages.html',descripcion:'Páginas'},
        {categoria:'configuracion',url:'entries.html',descripcion:'Entradas'},
        {categoria:'configuracion',url:'comentaries.html',descripcion:'Comentarios'},
        {categoria:'diseño',url:'menus.html',descripcion:'Menús'},
        {categoria:'diseño',url:'breadcrumb.html',descripcion:'Breadcrumb '},
        {categoria:'diseño',url:'templates.html',descripcion:'Plantillas'}
    ];
    document.getElementById('usuarios').innerHTML = `
        <a href="">
            <span class="iconos-enlaces">
                <i class="fas fa-users"></i>
            </span>
            Usuarios
        </a>
        <li id="lista-usuarios"></li>`;
    document.getElementById('configuracion').innerHTML = `
        <a href="">
            <span class="iconos-enlaces">
                <i class="fas fa-pencil-alt"></i>
            </span>
            Configuración
        </a>
        <li id="lista-configuracion"></li>`;
    document.getElementById('diseño').innerHTML = `
        <a href="">
            <span class="iconos-enlaces">
                <i class="fas fa-paint-brush"></i>
            </span>
            Diseño
        </a>
        <li id="lista-diseño"></li>`;

    for (var i = 0; i < enlaces.length; i++) {
        document.getElementById('lista-'+enlaces[i].categoria).innerHTML += `
        <a href="${enlaces[i].url}">
            <span class="rect"></span>
            <span class="circle"></span>
            ${enlaces[i].descripcion}
        </a>`;
        document.getElementById('enlaces-collapse').innerHTML += `
            <li><a href="${enlaces[i].url}">${enlaces[i].descripcion}</a></li>`;
    }
})();