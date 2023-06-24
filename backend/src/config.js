//38. vamos a importar a config
import {config} from "dotenv";

//39. invocamos la funcion
config();

//40. exportamos el .env
export default {
  host: process.env.HOST,
  database: process.env.DATABASE,
  usuario: process.env.USUARIO,
  password: process.env.PASSWORD 
}

//todo: continuamos en el archivo comandos.txt