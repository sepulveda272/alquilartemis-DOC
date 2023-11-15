# Configuración del Proyecto Backend - Paso a Paso

## 1. Instalación del **`package.json`**

Primero, asegúrate de estar en la carpeta **`backend`**.

```bash
cd backend/
npm init -y
```

## 2. Instalación de Express

    npm i express

## 3. Estructura de Carpetas y Archivos
Dentro de la carpeta **`backend`**, crea las siguientes carpetas y archivos:

```bash
- src
  - controllers
    - ejemplo.controllers.js (Archivo)
  - db
    - database.js (Archivo)
  - routes
    - ejemplo.routes.js (Archivo)
  - index.js (Archivo)
  - config.js (Archivo)
  - app.js (Archivo)
- .env
- .gitignore
```

## 4. Configuración del Archivo **`.env`**
Crea un archivo **`.env`** en la carpeta **`backend`** y agrega las variables de entorno:

```bash	
HOST= localhost
DATABASE= alquilartemis (va cambiando depende del nombre de la database)
USUARIO= (depende del computador)
PASSWORD= (depende del computador)
```

## 5. Creación del Archivo Principal **`app.js`**
En **`src/app.js`**, realiza los siguientes pasos:

* Importa Express.
* Declara una constante para la aplicación Express.
* Configura el puerto.
* Importa y usa las rutas.
## 6. Configuración de Nodemon (opcional)
Instala Nodemon:
```bash
npm i -D nodemon
```
En el archivo **`package.json`**, actualiza el script **`"dev"`**:

```bash
"dev": "nodemon src/index.js"
```

## 7. Ejecución del Proyecto
Finalmente, ejecuta el siguiente comando en la terminal para verificar que todo esté configurado correctamente:

```bash
npm run dev
```

## 8. Configuración de la Base de Datos en PHPMyAdmin
Asegúrate de crear la base de datos según las especificaciones proporcionadas en **`alquilartemis.sql`**.

## 9. Configuración de **`dotenv`**
Instala la dependencia **`dotenv`**:

```bash
npm i dotenv
```

En el archivo **`src/config.js`**, configura y utiliza **`dotenv`**.

## 10. Creación del Archivo **`src/db/database.js`**
Crea **`src/db/database.js`** y sigue los pasos para configurar la conexión con MySQL.

## 11. Importación y Configuración de **`promise-mysql`**
Instala la dependencia **`promise-mysql`**:

```bash
npm i promise-mysql
```

En el archivo **`src/db/database.js`**, importa y utiliza **`promise-mysql`**.

## 12. Finalización del Proyecto
¡Felicidades! Has completado la configuración del proyecto backend de Alquilartemis paso a paso. Siéntete libre de seguir las instrucciones restantes del archivo **`alquilartemis.sql`** para completar la configuración de la base de datos.

# ¡Gracias por tu atención y éxito en tu proyecto! 🚀