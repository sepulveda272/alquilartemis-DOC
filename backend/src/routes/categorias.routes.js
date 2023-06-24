//23. importamos al routes que vamos a utilizar
import { Router } from "express";

//33. importamos el categoria.controlles
import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";

//24. guardamos todo el recusos o poder en una constante
const routes = Router();

//34. le pasamos a la ruta llamando el import que hicimos anteriormente
routes.get("/", categoriaController.getCategorias);

//todo: continuamos en el archivo app.js

//26. creamos una funcion donde esperamos el req del el usuario
/* routes.get("/", (req, res)=>{
  //*27. con esto estamos mandando de devuelta desde el servidor asi el cliente una res
  res.send("categorias de alquilartemis");
  todo: //continuamos en app.js
}) */

//25. disponemos la variable para el uso del resto de la aplicacion
export default routes;