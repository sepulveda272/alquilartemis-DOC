//9. se importa el express
import express from "express";
//28. importamos el enrutador para que genere todas la rutas de categorias
import categoriaRoutes from "./routes/categorias.routes.js";
import constructoraRoutes from "./routes/constructoras.routes.js";
import empleadoRoutes from "./routes/empleados.routes.js";
import productoRoutes from "./routes/productos.routes.js";

//10. luego vamos al package.json y debajo de "description" ponemos "type": "module"

//11. se crea una constante donde se guarda todo el poder del express
const app = express();

//13. se declara el puerto
app.set("port", 5000);
//todo: continuamos en el archivo index.js

//29. Routes
/* app.use(categoriaRoutes); */

//todo: continuamos en el archivo de comandos.txt

//35. es cuando toca hacerle una ruta y un controlador para diferentes
app.use("/api/categorias", categoriaRoutes)
app.use("/api/constructora",constructoraRoutes);
app.use("/api/empleados",empleadoRoutes);
app.use("/api/productos",productoRoutes);

//todo: continuamos en el archivo de comandos.txt



//12. se exporta la constante app
export default app;