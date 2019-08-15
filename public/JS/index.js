
function ValidateAlpha(evt){
    var keyCode = (evt.which) ? evt.which : evt.keyCode
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)return false;
    return true;
}

var inputs = ["txt-nombre", "txt-apellido", "txt-correo", "txt-contrasenia", "txt-contrasenia-verificada"];

function registrarUsuario(){
    $("#div-error-txt-correo").html("Campo requerido");
    $("#div-error-txt-contasenia").html("Campo requerido");
    for (var i = 0; i < inputs.length; i++) {
        inputVacio(inputs[i]);
        if (inputs[i]=='txt-correo' && (inputVacio(inputs[i])== true)) {
            $("#div-error-txt-correo").html("Campo requerido");
            verificarCorreo();
        }
        if (inputs[i]=='txt-contrasenia' && (inputVacio(inputs[i])== true)) {
            $("#div-error-txt-contrasenia").html("Campo requerido");
            verificarContrasenia();
        }
    }
};

function inputVacio(inputName){
    var campo = "#"+inputName;
    var input =$(campo).val();
    if(input == '' || input == 'NULL'){
        var error = "#div-error-"+inputName;
        $(campo).addClass("classError");
        $(error).css("display","inline");
        return false;
    }
    else{
        var error = "#div-error-"+inputName;
        $(campo).removeClass("classError");
        $(error).css("display","none");
        return true;
    }
}

function verificarCorreo(){
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if (!(regex.test($('#txt-correo').val().trim()))) {
        console.log('El correo es invalido');
        $("#div-error-txt-correo").html("Correo inválido");
        $('#txt-correo').addClass("classError");
        $("#div-error-txt-correo").css("display","inline");
    }
    else{
        $("#div-error-txt-correo").css("display","none");
    }
}

function verificarContrasenia(){
   var contrasenia = $("#txt-contrasenia").val();
    if(validar_clave(contrasenia) == true){
        $("#txt-verificar-contrasenia").removeClass("classError");
        $("#div-error-txt-contrasenia").css("display","none");
     }
     else{
        console.log('La contraseña ingresada no es fuerte');
        $("#div-error-txt-contrasenia").html("La contraseña ingresada no es fuerte");
        $("#txt-verificar-contrasenia").addClass("classError");
        $("#div-error-txt-contrasenia").css("display","inline");
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