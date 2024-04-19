const fs = require('fs');
const streamEscritura = fs.createWriteStream('./archivos/mi_archivo.txt');
const EventEmitter = require('events');//permite tener acceso a los eventos

class Emisor extends EventEmitter {}

const miEmisor = new Emisor();



function escribirArchivo() {

    var iteraciones = 5;
    for (let i = 0; i < iteraciones; i++){
        streamEscritura.write(`Iteracion #${i}\n`)
    }
    streamEscritura.write(`=====FIN=====`)
    streamEscritura.end();
}

function notificarPorCorreo(){
    console.log("Preparando correo");
    setTimeout(
        ()=>{
            miEmisor.emit("Correo OK")
        },
        1000
    )

}

function leerDocumento() {
    fs.readFile('./archivos/mi_archivo.txt', (error,documento)=>{
        console.log(documento.toString())
    })

}

streamEscritura.on('close', ()=>{
    notificarPorCorreo();
})
miEmisor.on("Correo OK", ()=>{
    leerDocumento();
})
escribirArchivo();