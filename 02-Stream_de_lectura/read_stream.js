const fs = require("fs");
//permite lee archivo en stream
const streamLectura = fs.createReadStream("./archivos/mi_archivo.txt", {
  encoding: "utf-8",
});

//Esuchar eventos de stream
streamLectura
  .on("open", () => {
    console.log("El archivo esta abierto");
  })
  .on("data", () => {
    console.log("------");
  })
  .on("close", () => {
    console.log("El archivo esta cerrado");
  })
  .on("error", () => {
    console.log("El archivo esta con error");
  });
