const fs = require('fs');
var http = require('http');

function leerArchivo() {
    //fs.readFileSync("./archivos/archivo.txt", "utf8");
    const streamLectura = fs.createReadStream("./archivos/archivo.txt", {
        encoding: "utf-8"
    });
}

http
    .createServer(function (req, res) {
        for (let i = 0; i < 500; i++){
            leerArchivo();
        }
        res.write("Hola mundo");
        res.end();
    })
    .listen(8080);