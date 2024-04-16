const fs = require('fs');

console.time("Tiempo de respuesta")
//Lectura sincrona
/* for (let i = 0; i <= 10; i++){
    fs.readFileSync('archivo.txt', 'utf8');
} */

//lectura asincrona
for (let i = 0; i <= 10; i++){
    const streamlectura = fs.createReadStream('archivo.txt', {
        encoding: 'utf8'
    });
}

console.timeEnd("Tiempo de respuesta");