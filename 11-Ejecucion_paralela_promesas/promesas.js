function mensajesUsuario() {
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            resolve( "Mensajes");
        }, 2000);
    })  
}
function fotosUsuario() {
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            resolve("fotos");
        }, 2000);
    })  
}
function transancionesUsuario() {
    return new Promise( (resolve, reject)=>{
        setTimeout(( )=>{
            resolve( "Transanciones");
        }, 2000);
    })  
}
Promise.all([mensajesUsuario(), fotosUsuario(), transancionesUsuario()])
.then((valores)=>{
    console.log(valores);
})