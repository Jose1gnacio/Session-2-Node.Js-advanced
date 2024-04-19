const fs = require('fs');
const {Duplex} = require("stream");

const streamLectura = fs.createReadStream('./archivos/primero.txt');
const streamescritura = fs.createWriteStream('./archivos/segundo.txt');

const reporte = new Duplex({
    write(data, encode, callback){
        console.log(data);
        callback();
    },
    read(size){}
})
streamLectura.pipe(reporte).pipe(streamescritura);