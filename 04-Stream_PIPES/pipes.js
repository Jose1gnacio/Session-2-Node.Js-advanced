const fs = require ('fs');

const streamLectura = fs.createReadStream('./archivos/primero.txt');
const streamescritura = fs.createWriteStream('./archivos/segundo.txt');

streamLectura.pipe(streamescritura);

streamLectura.on("end", ()=>{
    console.log("Proceso finalizado")
})


