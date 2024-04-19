//Trasnform se usa cuando quiero lee y eidtar los datos que estoy moviendo con pipe

const fs = require('fs');
const {Transform} = require("stream");


const streamLectura = fs.createReadStream('./archivos/primero.txt');
const streamescritura = fs.createWriteStream('./archivos/segundo.txt');

streamLectura.setEncoding('utf8');


const filtro = new Transform ({
    writableObjectMode: true,//hace entrar al mode de objeto para poder escribir.
    transform(datos, encoding, callback) {
        this.push(datos.toString().toUpperCase())
        callback();
    },
    final(callback){ //metodo se invoca cuando se termina la lectura y comienza la escritura
        callback();
    }
})

streamLectura.pipe(filtro).pipe(streamescritura);