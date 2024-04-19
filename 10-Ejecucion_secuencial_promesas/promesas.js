//manera de hacer que las promesas se ejecuten secuencialmente 
function login() {
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            resolve();
        }, 2000);
    })  
}

function datosUsuario() {
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            resolve();
        }, 2000);
    })  
}

login().then(()=>{
    console.log("Usuario autenticado")
    return datosUsuario()
}).then(()=>{
    console.log("Datos del usuario")
})