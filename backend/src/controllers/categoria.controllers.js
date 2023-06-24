//47. importamos el getConnection 
import getConnection from "./../db/database.js"

//31. es donde vamos a crear un metodo para asignar los procesos de la respuesta del servidor
const getCategorias = async (req,res)=>{
  /* res.json({"categoria": "electrodomesticos"}); */
  //48. creamos una constante connection y aplicamos el asyn awit dentro de un try cartch
  try {
    const connection =await getConnection();
    const result = await connection.query("SELECT id_categoria, nombre_categoria, descripcion_categoria, img_categoria FROM categorias");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

  //todo: continuacion en el archivo comandos.txt


//32. exportamos const creada en el paso anterior
export const methodsHTTP = {
  getCategorias
}
//todo: continuamos en el archivo categorias.routes.js