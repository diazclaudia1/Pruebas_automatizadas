# Guía de despliegue Cypress

1. Para desplegar se debe ejecutar el desde la carpeta raíz del proyecto el comando `./node_modules/.bin/cypress open`, por ejemplo:

CypressProject -> Desde acá
    * cypress
    * cypress.json
    * node_modules
    * package-lock.json

[Directorio](https://uniandes-my.sharepoint.com/:i:/g/personal/cx_diaz_uniandes_edu_co/EbzVylDgb0dCk2dbdLfLY4cBJG4TEcPzaJhtIAzTcavw4w?e=vtX4nP)

2. Al abrir Cypress se debe hacer clic en el archivo monkey_testing.spec.js que se encuentra fuera de la carpeta examples:

[Ejecutar](https://uniandes-my.sharepoint.com/:i:/g/personal/cx_diaz_uniandes_edu_co/EXaM-GJDBTxFnG_Yc9-vkzsBUPryUShLP54gTtH2t9BqrQ?e=XMH8KE)

# Funcionalidades bajo pruebas

| Id   | Nombre | Resumen| 
| ---- | ----- | ----- |
| F001 | Escribir posts | Permite editar, guardar y publicar un nuevo post y ver todos los post creados. |
| F002 | Settings generales | Permite modificar la información de la página como el título, la zona horaria, el lenguaje, el logo, etc. |
| F003	| Profile	| Permite ver mi información como usuario y modificarlo. |
| F004	| Login y Logout | 	Permite cerrar e iniciar una sesión con cada usuario.|
| F005	| Navegar site	| Permite navegar por las secciones del site, como Home, Tag, Author y Help.|


# Escenarios por funcionalidad bajo pruebas

| Id Funcionalidad | Escenario| Requerimiento |Tipo | Resumen| 
| ---- | ----- | ----- | -----| -----| 
| F001 | Escribir un post | Funcional | Positivo|Creación de un nuevo post |
| F001 | Editar un post | Funcional | Positivo| Editar un post ya creado |
| F002 | Editar título de la página | Funcional | Positivo| Modificar el título de la página | 
| F002 | Editar la ubicación de la página | Funcional | Positivo| Modificar la location de la página |
| F003 | Agregar info en la location del profile | Funcional | Positivo| Agregar o modificar información en la location del profile | 
| F003 | Agregar info en la website del profile | Funcional | Positivo| Agregar o modificar información del website del profile |
| F004 | Login incorrecto | Funcional | Negativo| Escribir credenciales incorrectas | 
| F004 | Login correcto | Funcional | Positivo| Escribir credenciales correctas e iniciar sesión, user cx.diaz@uniandes.edu.co, pass 3167782178+caya |
| F005 | Navegar por el site | Funcional | Positivo| Se debe permitir navegar por el site fluidamente | 
| F005 | Navegar por el site random | Funcional | Negativo| Se debe permitir navegar por el site haciendo eventos aleatorios y esperar encontrar un error | 


# Pros y contras de la herramienta Cypress 

## Pros:

* Permite hacer pruebas más rápidas que las manuales
* Permite encontrar casos raros en las pruebas aleatorias
* Fácil de implementar, es solo descargar y agregar las funcionalidades

## Contras:

* Pruebas muy frágiles, si se cambia el id de un campo ya no funciona la prueba
* Al encontrar un solo error se termina todo el proceso a probar
* Hay que seleccionar específicamente el elemento y no siempre lo identifica fácilmente 


# Guía de despliegue Kraken

[Despliegue de kraken](https://misovirtual.virtual.uniandes.edu.co/codelabs/kraken-testing-web/index.html#0)

# Funcionalidades bajo pruebas kraken

| Id   | Nombre | Resumen| 
| ---- | ----- | ----- |
| F001 | Escribir posts | Permite editar, guardar y publicar un nuevo post y ver todos los post creados. |
| F002 | Crear un tag | Permite crear tags por cada post. |
| F003	| Logout y login	| Permite cerrar e iniciar sesión. |
| F004	| Ver información de Ghost | Permite ver información específica de la herramienta Ghost.	|
| F005	| Crear una página	| Permite crear una nueva página.|


# Escenarios por funcionalidad bajo pruebas

| Id Funcionalidad | Escenario| Requerimiento |Tipo | Resumen| 
| ---- | ----- | ----- | -----| -----| 
| F001 | Escribir un post | Funcional | Positivo| Creación de un nuevo post |
| F001 | Editar un post | Funcional | Positivo| Editar un post ya creado |
| F002 | Crear un tag | Funcional | Positivo| Modificar el título de la página | 
| F002 | Eliminar un tag | Funcional | Positivo| Modificar la location de la página |
| F003 | login  | Funcional | Positivo| Iniciar sesión | 
| F003 | Logout | Funcional | Positivo| Cerrar sesión |
| F004 | Ver información de Ghost 1 | Funcional | Positivo| Acceder a información de Ghost | 
| F004 | Ver información de Ghost 2 | Funcional | Positivo| Navegar por la información de Ghost |
| F005 | Crear una página | Funcional | Positivo| Se debe permitir crear una página del blog | 
| F005 | Editar una página | Funcional | Positivo| Se debe permitir editar una página del blog | 


# Pros y Contras de Kraken

## Pros

* Es mas cercano a simular un comportamiento real de parte de un usuario y es más coherente en los pasos a seguir.

* Permite encontrar objetos de acuerdo a los identificadores, nombres, etc de los elementos de la página, por lo que es mas sencillo indicar en donde hacer el evento.

* Permite crear escenarios de pruebas de forma mas sencilla e intuitiva ya que usa lenguaje natural BDD.


## Contras
* Hay que separar las feature por archivo, lo que implica que si hay muchas pruebas van a haber muchos archivos.
* Para las mismas pruebas algunas veces pasan y otras no, por lo que no es confiable el resultado de las pruebas.