
var informationInputs = ["txt-correo", "txt-contrasenia"];

function inputVacio(inputName){
    var campo = "#"+inputName;
    var input =$(campo).val();
    if(input == '' || input == 'NULL'){
        var error = "#div-error-"+inputName;
        $(campo).addClass("classError");
        $(error).css("display","inline");
        return true;
    }
    else{
        var error = "#div-error-"+inputName;
        $(campo).removeClass("classError");
        $(error).css("display","none");
        return false;
    }
}

function verificarCorreo(){
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if (!(regex.test($('#txt-correo').val().trim()))) {
        console.log('El correo es invalido');
        $("#div-error-txt-correo").html("Correo inválido");
        $('#txt-correo').addClass("classError");
        $("#div-error-txt-correo").css("display","inline");
        return false;
    }
    else{
        $("#div-error-txt-correo").css("display","none");
        return true;
    }
}

function iniciarSesion(){
	$("#div-error-txt-correo").html("Campo requerido");
	var error = ' ';
    for (var i = 0; i < informationInputs.length; i++) {
        var vacio = inputVacio(informationInputs[i]);
        if (vacio == true ) {
        	var error = 'vacio';
    	}  
    }

    if (error == ' ' && (verificarCorreo() == true)) {
    	alert('Iniciar sesion');
    }
}