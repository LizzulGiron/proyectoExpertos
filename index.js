var express = require("express");
var app = express()
//Exponer una carpeta como publica para archivos estaticos
app.use(express.static("public"))
app.listen(8888, function(){
    console.log("Servidor levantado");
});