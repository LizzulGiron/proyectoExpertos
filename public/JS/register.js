function ValidateAlpha(evt){
    var keyCode = (evt.which) ? evt.which : evt.keyCode
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)return false;
    return true;
}

function mostrarPaso1(){
        console.log("Paso 1");
        $("#paso1").show();
        $("#informacion").addClass("active");
        $("#contrasenia").removeClass("active");
        $("#paso2").hide();
      }

var informationInputs = ["txt-nombre", "txt-apellido", "txt-correo"];
var contraseniaInputs = ["txt-contrasenia", "txt-contrasenia-verificada"];

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

function verificarContrasenia(){
   var contrasenia = $("#txt-contrasenia").val();
    if(validar_clave(contrasenia) == true){
        $("#txt-verificar-contrasenia").removeClass("classError");
        $("#div-error-txt-contrasenia").css("display","none");
        return true;
     }
     else{
        $("#div-error-txt-contrasenia").html("La contraseña ingresada no es fuerte");
        $("#txt-verificar-contrasenia").addClass("classError");
        $("#div-error-txt-contrasenia").css("display","inline");
        return false;
     }

     function validar_clave(contrasenia){
            if(contrasenia.length >= 8){ 
                var mayuscula = false;
                var minuscula = false;
                var numero = false;
                var caracter_raro = false;
                for(var i = 0;i<contrasenia.length;i++){
                    if(contrasenia.charCodeAt(i) >= 65 && contrasenia.charCodeAt(i) <= 90){mayuscula = true;}
                    else if(contrasenia.charCodeAt(i) >= 97 && contrasenia.charCodeAt(i) <= 122)
                    {minuscula = true;}
                    else if(contrasenia.charCodeAt(i) >= 48 && contrasenia.charCodeAt(i) <= 57)
                    {numero = true;}
                    else{caracter_raro = true;}
                }if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true)
                {return true;}
            }
                        return false;}
};

function validarInformacion(){
	$("#div-error-txt-correo").html("Campo requerido");
	var error = ' ';
    for (var i = 0; i < informationInputs.length; i++) {
        var vacio = inputVacio(informationInputs[i]);
        if (vacio == true ) {
        	var error = 'vacio';
    	}  
    }

    if (error == ' ' && (verificarCorreo() == true)) {
    	$("#paso1").hide();
        $("#informacion").removeClass("active");
        $("#contrasenia").addClass("active");
        $("#paso2").show();
    }
}

function registrar(){
	$("#div-error-txt-contrasenia-verificada").html("Campo requerido");
	var error = ' ';
    for (var i = 0; i < contraseniaInputs.length; i++) {
        var vacio = inputVacio(contraseniaInputs[i]);
        if (vacio == true ) {
        	var error = 'vacio';
    	}  
    }
    if (error == ' ' && (verificarContrasenia() == true)) {
    	//alert('registrar usuario');
    	var contrasenia = $("#txt-contrasenia").val();
    	var contraseniaVerificada = $("#txt-contrasenia-verificada").val();
    	if (contrasenia != contraseniaVerificada) {
    		console.log('Aun no');
    		$("#div-error-txt-contrasenia-verificada").html("La contraseña ingresada no coincide");
    		$("#div-error-txt-contrasenia-verificada").css("display","inline");

        	
    	}
    	else{
    		console.log('Listo');
    	}

    }
}