# Eiteck Test App

Esta es una prueba como parte del proceso de admisión para una oferta laboral en __Eiteck__

La aplicación muestra a los personajes de la Serie de Televisión [Rick and Morty](https://www.imdb.com/title/tt2861424/), así como información detallada de cada uno de ellos.

Para desplegar este sitio en modo desarrollo seguir los siguientes pasos:

* Abrir la terminal en la ubicación deseada y ejecutar el siguiente comando: 
  ~~~
  git clone 
  ~~~
* Al hacerlo mediante la terminal acceder a la carpeta creada:
  ~~~
  cd [CARPETA] 
  ~~~
* Ya con el proyecto clonado se debe instalar las dependencias del mismo ya sea:
  ~~~
  npm install 
  ~~~
  ~~~
  yarn install 
  ~~~
* Antes de ejecutar la aplicación crear un archivo environment (.env) y escribir la siguiente variable:
  ~~~
  VITE_RICK_AND_MORTY_API=[URL_API] 
  ~~~
  Igualando con el enlace correspondiente a la [API](https://rickandmortyapi.com/) de Rick and Morty
* Para ejecutar la aplicación escribir los siguientes comandos:
  ~~~
  npm start
  ~~~
  ~~~
  yarn dev 
  ~~~

---

Por último para desplegar la aplicaión ejecutar el siguiente comando:
~~~
yarn build 
~~~
Ya con el directorio dist en el proyecto se puede desplegar el mismo en un servicio externo o ya sea como repositorio dependiendo del servicio host.