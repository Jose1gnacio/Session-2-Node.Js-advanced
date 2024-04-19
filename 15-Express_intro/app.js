const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (request, respuesta)=>{
    respuesta.send('Hola mundo con express')//respuesta al usuario cuando solciita esta ruta con get
})

app.listen(puerto, ()=>{
    console.log(`Escuchando el puerto ${puerto}!`)
})