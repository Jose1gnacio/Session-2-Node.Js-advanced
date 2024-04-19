//promisify esta en la libreria util y es para convertir todos los callbacks a promesas
const fs = require('fs');
const util = require("util");



//con callback
/* fs.writeFile("./archivos/archivo/", "Hola mundo promesas", ()=>{
    console.log("Archivo y escritura creada");
}) */

//con promesa
const writeFilePromesa = util.promisify(fs.writeFile);

writeFilePromesa("./archivos/archivo2.txt", "Hola mundo promesas2")
.then(()=>{
    console.log("Archivo creado")
})
.catch(()=>{
    console.log("Error")
})

