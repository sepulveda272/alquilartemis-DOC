//7. se hace el metode main

//14. importar app
import app from "./app.js";

const main = () => {
  //15. utilizamos lo que importamos en el main
  app.listen(app.get("port"));
  console.log(`"hola mundo de node js ${app.get("port")}`);
  //todo: continuacion en el archivo comandos.txt
}

//.8 se invoca la constante main
main();

//todo: contunuacion de en app.js