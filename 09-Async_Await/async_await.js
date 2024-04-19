function numeroAleatorio() {

    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            resolve( Math.floor( Math.random() * 100));
        }, 2000);
    })
   

}
 async function restultado(){
    console.log("resultado invocado");
    const aleatorio = await numeroAleatorio();//el codigo avanza hasta tener lo que se necesita en await
    console.log(`Resultado: ${aleatorio}`);
}
restultado();
