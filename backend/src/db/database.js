//43. importar a mysql y el cofig.js
import mysql from "promise-mysql";
import config from "./../config.js";


//44. creamos una contante para el mysql
const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.usuario,
  password: config.password
});

//45. creamos una funsion que le retorne el connection
const getConnection = () => {
  return connection
};

//46. la disponemos para el resto de modulos
export default getConnection;

//todo:  continuamos en el archivo categoria.controllers.js