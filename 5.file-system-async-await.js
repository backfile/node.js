const fs = require("node:fs/promises");

(
  async ()=>{
    console.log("leyendo el primer archivo");
    const text = await fs.readFile("./archivo.txt", "utf-8");
    console.log("Primer texto: ", text);

    console.log("Hacer esto mientras lee el archivo");

    console.log("leyendo el segundo archivo");
    const secondText = await fs.readFile("./archivo2.txt", "utf-8");
    console.log(secondText);
  }
)()

