const promesasNode = require('fs').promises;

promesasNode.copyFile("./archivos/original.txt", "./archivos/copia_original.txt")
            .then(()=>{console.log("copia terminada")})//se ejecuta cuando se realiza la copia correctamente
            .catch((err)=>{console.log(err, "Ocurrio un error")})//se ejecuta cuando se presenta un error
            .finally(()=>{console.log("Finalizo")});//se ejecuta en todos los casos