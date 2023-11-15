# Explicaion paso a paso más detallada

1. para instalar el package.json necesita primero siempre entrar a la carpeta backend

2. para entrar a esa carpeta backend se usa el cd backend/ y ya estando en la carpeta backend usa el comando npm init -y

3. luego se instala el express con el siguiente comando npm i express

4. dentro de la carpeta backend crear la carpetas src 

5. dentro de la carpeta src crear las siuientes carpetas y archivos:

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

6. dentro de la carpeta backend crear un archivo .env donde van la variables de entorno


* **<--continuacion del paso a paso en el archivo index.js-->**

16. despues en donde esta el scripts reemplazarlo con     "dev": "node src/index.js"

17. para mirar si esta bien es asi: npm run dev

18. para instalar nodemon se usa el siguiente comando npm i -D nodemon

19. luego se tiene que cambiar el scripts a "dev": "nodemon src/index.js"

20. despues por ultima vez ponemos el comando npm run dev

21. se crea la database en phpmyadmin para poder continuar

22. vamos a la carpeta routes y descargamos el archivo categorias.routes.js

* **<--continuamos en el archivo categorias.routes.js-->**

30. se crea un archivo dentro de la carpeta de controllers que es en donde controlamos las respuestas del servidor que le manda al cliente

* **<--continuamos en el archivo que creamos en la carpeta de controllers-->**

36. en el archivo .env es donde vamos a ingresar las variables de entorno

 ## **IMPORTANTE TENER EN CUENTA QUE EN LINUX SE PONE USUARIO Y EN WINDOWS SE PONE USER**

```bash	
HOST= localhost
DATABASE= alquilartemis (va cambiando depende del nombre de la database)
USUARIO= (depende del computador)
PASSWORD= (depende del computador)
```

37. vamos a intalar una dependencia que es con el siguiente comando npm i dotenv

* **<--continuamos en el archivo config.js-->**

41. dentro de la carpeta db crear un archivo que se llame database.js

42. instalamos el promise-mysql con el siguiente comando npm i promise-mysql

* **<--continuamos en el archivo database.js-->**

49. Ya terminamos todo el paso a paso y6 a continuacion se agregara el resto de informacion que estan en el archivo alquilartemis.sql

# 🎉 GRACIAS POR SU ATENCION 🎉