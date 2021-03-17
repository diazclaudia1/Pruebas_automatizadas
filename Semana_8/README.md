# Entrega final Pruebas automatizadas de software 

* [Estrategia de pruebas]()
* [Inventario de pruebas exploratorias]()
* [Video de la estrategia de pruebas]()
* [Presentación de la estrategia de pruebas]()
* [Issues Ghost](https://github.com/diazclaudia1/Pruebas_automatizadas/issues)



# Instrucciones de ejecución de pruebas

## 1. Pruebas Aleatorias

#### Guía de despliegue Cypress

1. Para desplegar se debe ejecutar el desde la carpeta raíz del proyecto el comando `./node_modules/.bin/cypress open`, por ejemplo:

CypressProject -> Desde acá
<br>  * cypress
<br>   * cypress.json
<br>    * node_modules
<br>    * package-lock.json

[Directorio](https://uniandes-my.sharepoint.com/:i:/g/personal/cx_diaz_uniandes_edu_co/EbzVylDgb0dCk2dbdLfLY4cBJG4TEcPzaJhtIAzTcavw4w?e=vtX4nP)

2. Al abrir Cypress se debe hacer clic en el archivo monkey_testing.spec.js que se encuentra fuera de la carpeta examples:

[Ejecutar](https://uniandes-my.sharepoint.com/:i:/g/personal/cx_diaz_uniandes_edu_co/EXaM-GJDBTxFnG_Yc9-vkzsBUPryUShLP54gTtH2t9BqrQ?e=XMH8KE)

#### Funcionalidades bajo pruebas

| Id   | Nombre | Resumen| 
| ---- | ----- | ----- |
| F001 | Escribir posts | Permite editar, guardar y publicar un nuevo post y ver todos los post creados. |
| F002 | Settings generales | Permite modificar la información de la página como el título, la zona horaria, el lenguaje, el logo, etc. |
| F003	| Profile	| Permite ver mi información como usuario y modificarlo. |
| F004	| Login y Logout | 	Permite cerrar e iniciar una sesión con cada usuario.|
| F005	| Navegar site	| Permite navegar por las secciones del site, como Home, Tag, Author y Help.|


#### Escenarios por funcionalidad bajo pruebas

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


### Pros y contras de la herramienta Cypress 

#### Pros:

* Permite hacer pruebas más rápidas que las manuales
* Permite encontrar casos raros en las pruebas aleatorias
* Fácil de implementar, es solo descargar y agregar las funcionalidades

#### Contras:

* Pruebas muy frágiles, si se cambia el id de un campo ya no funciona la prueba
* Al encontrar un solo error se termina todo el proceso a probar
* Hay que seleccionar específicamente el elemento y no siempre lo identifica fácilmente 


## 2. Pruebas E2E

### Guía de despliegue Pruebas kraken

[Despliegue de kraken](https://misovirtual.virtual.uniandes.edu.co/codelabs/kraken-testing-web/index.html#0)

#### Funcionalidades bajo pruebas kraken

| Id   | Nombre | Resumen| 
| ---- | ----- | ----- |
| F001 | Escribir posts | Permite editar, guardar y publicar un nuevo post y ver todos los post creados. |
| F002 | Crear un tag | Permite crear tags por cada post. |
| F003	| Logout y login	| Permite cerrar e iniciar sesión. |
| F004	| Ver información de Ghost | Permite ver información específica de la herramienta Ghost.	|
| F005	| Crear una página	| Permite crear una nueva página.|


#### Escenarios por funcionalidad bajo pruebas

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


### Pros y Contras de Kraken

#### Pros

* Es mas cercano a simular un comportamiento real de parte de un usuario y es más coherente en los pasos a seguir.

* Permite encontrar objetos de acuerdo a los identificadores, nombres, etc de los elementos de la página, por lo que es mas sencillo indicar en donde hacer el evento.

* Permite crear escenarios de pruebas de forma mas sencilla e intuitiva ya que usa lenguaje natural BDD.


#### Contras
* Hay que separar las feature por archivo, lo que implica que si hay muchas pruebas van a haber muchos archivos.
* Para las mismas pruebas algunas veces pasan y otras no, por lo que no es confiable el resultado de las pruebas.


## 3. Pruebas VRT

### Funcionalidades bajo pruebas VRT

| Id   | Nombre | Resumen| 
| ---- | ----- | ----- |
| F001 | Login | Permite iniciar sesión correctamente con validaciones respectivas. |
| F002 | Filtrar post | Permite filtrar post por diferentes parámetros. |
| F003	| Filtrar Pages	| Permite ver mi información como usuario y modificarlo. |
| F004	| Filtrar Tags | 	Permite la creacion de un tag, ver tags internos publicos y eliminar un tag.|
| F005	| Navegar menú del perfil	| Permite navegar por las opciones del perfil |


### Escenarios por funcionalidad bajo pruebas

| Id Funcionalidad | Escenario| Requerimiento |Tipo |
| ---- | ----- | ----- | -----|
| F001 | Hacer login con campos vacios | Funcional | Negativo|
| F001 | Hacer login con un campo lleno | Funcional | Negativo| 
| F001 | Hacer login con campos erróneos | Funcional | Negativo| 
| F001 | Hacer login correctamente | Funcional | Positivo| 
| F002 | Filtrar post por all posts draft post | Funcional | Positivo| 
| F002 | Filtrar post por all authors ghost | Funcional | Positivo| 
| F002 | Filtrar post por oldest | Funcional | Positivo| 
| F002 | Filtrar post por published post | Funcional | Positivo| 
| F003 | Filtrar pages por all posts draft post | Funcional | Positivo| 
| F003 | Filtrar pages por all authors ghost | Funcional | Positivo| 
| F003 | Filtrar pages por oldest | Funcional | Positivo| 
| F003 | Filtrar pages por published post | Funcional | Positivo| 
| F004 | Ver pagina de tags | Funcional | Positivo| 
| F004 | Listar tags publicos | Funcional | Positivo| 
| F004 | Listar tags privados | Funcional | Positivo| 
| F004 | Eliminar Tag | Funcional | Positivo|
| F004 | Crear Tag | Funcional | Positivo| 
| F005 | Visitar mi profile | Funcional | Positivo| 
| F005 | Guardar cambios en mi profile | Funcional | Positivo| 
| F005 | Cambiar sitio por entrada fallida | Funcional | Negativo| 
| F005 | Cambiar email por entrada fallida | Funcional | Negativo| 
| F005 | Cambiar nombre por entrada fallida | Funcional | Negativo|


## Guía de despliegue Cypress

1. Para desplegar se debe ejecutar el desde la carpeta raíz del proyecto el comando `./node_modules/.bin/cypress open`, por ejemplo:

CypressProject -> Desde acá
    * cypress
    * cypress.json
    * node_modules
    * package-lock.json

[Directorio](https://uniandes-my.sharepoint.com/:i:/g/personal/cx_diaz_uniandes_edu_co/EbzVylDgb0dCk2dbdLfLY4cBJG4TEcPzaJhtIAzTcavw4w?e=vtX4nP)

2. Al abrir Cypress se debe hacer clic en el archivo monkey_testing.spec.js y monkey_testing_ghost3.spec.js que se encuentra fuera de la carpeta examples:

[Ejecutar](https://uniandes-my.sharepoint.com/:i:/g/personal/cx_diaz_uniandes_edu_co/EXaM-GJDBTxFnG_Yc9-vkzsBUPryUShLP54gTtH2t9BqrQ?e=XMH8KE)

### Informe de pruebas Cypress

* Ghost 3: ![Último ghost](https://raw.githubusercontent.com/diazclaudia1/test_sem_5/master/Test_sem_6/img/last.png)
* Ultimo Ghost: ![Ghost versión 3](https://raw.githubusercontent.com/diazclaudia1/test_sem_5/master/Test_sem_6/img/old.png)


### Guía de despliegue Backstop

* Instalar backstop según los pasos [Guia](https://misovirtual.virtual.uniandes.edu.co/codelabs/visual-regression-testing-backstop/index.html#0)
* Desde la carpeta raíz ejecutar `backstop init`
* En el archivo backstop.json del directorio raíz se debe generar las referencias con las imágenes de la carpeta de screenshots [screenshots base](https://github.com/diazclaudia1/test_sem_5/tree/master/Test_sem_6/CypressProject/cypress/screenshots/monkey_testing.spec.js/monkey_testing.spec.js)
* Desde la carpeta raíz ejecutar `backstop reference`
* Agregar las url de las imágenes a comparar en el archivo backstop.json [screenshots comparar](https://github.com/diazclaudia1/test_sem_5/tree/master/Test_sem_6/CypressProject/cypress/screenshots/monkey_testing.spec.js/monkey_testing_ghost3.spec.js)
* Desde la carpeta raíz ejecutar `backstop test`

#### Informe de regresión visual BackStop

* [Informe html](https://github.com/diazclaudia1/test_sem_5/blob/master/Test_sem_6/Backstop/backstop_data/html_report/index.html)
* ![Informe](https://raw.githubusercontent.com/diazclaudia1/test_sem_5/master/Test_sem_6/img/_C__Users_Claudia_Desktop_Backstop_backstop_data_html_report_index.html.png)
* Issues de diferencias encontradas: [Issues](https://github.com/diazclaudia1/test_sem_5/issues)

#### Pros de las herramientas


### Cypress 

#### Contras

* Es muy manual la forma como se debe ir y ver los nombres y clases de los elementos para que sean accedidos
* Doble trabajo ya que hay probar dos versiones de la misma aplicación y cada una tiene diferentes elementos

#### Pros

* Es interesante el tomar los screenshots para analizar las pantallas y que sean usadas para una regresión visual


### Backstop

#### Contras

* Es muy milimétrico y si las pantallas son iguales pero hay una diferencia en la posición de un elemento ya lo toma como falla 

#### Pros

* Es muy rápido hacer las comparaciones para dos versiones de la misma herramienta y así enfocarse en las funcionalidades que cambiaron




## 4. Pruebas de validación de datos

### Guía de despliegue Cypress

1. Para desplegar se debe ejecutar el desde la carpeta raíz del proyecto el comando `./node_modules/.bin/cypress open`, por ejemplo:

CypressProject -> Desde acá
<br>  * cypress
<br>   * cypress.json
<br>    * node_modules
<br>    * package-lock.json

![Directorio](https://raw.githubusercontent.com/diazclaudia1/Pruebas_automatizadas/master/Semana_7/CypressProject/cypress/screenshots/thumbnail.png)

2. Al abrir Cypress se debe hacer clic en el archivo sem_7_testing_login.spec.js, sem_7_testing_settings.js, sem_7_testing_profile.js, sem_7_testing_tags.js que se encuentran fuera de la carpeta examples:

![Ejecutar](https://raw.githubusercontent.com/diazclaudia1/Pruebas_automatizadas/master/Semana_7/CypressProject/cypress/screenshots/ejecutar.png)


### Funcionalidades bajo pruebas

| Id   | Nombre | Resumen| 
| ---- | ----- | ----- |
| F001 | Login | Permite iniciar una sesión con cada usuario. |
| F002 | Settings generales | Permite modificar la información de la página como el título, la zona horaria, el lenguaje, el logo, etc. |
| F003  | Profile   | Permite ver mi información como usuario y modificarlo. |
| F004  | Tags |    Permite crear los tags que serán usados por las páginas.|


### Escenarios por funcionalidad bajo pruebas

| Id Funcionalidad | Requerimiento |Tipo | Total Pruebas|
| ---- | ----- | ----- | ----- | 
| F001 |Funcional | A priori| 5 |
| F001 |Funcional | Pseudo aleatorio| 16 |
| F001 |Funcional | Aleatorio | 16|
| F002 |Funcional | A priori| 5 |
| F002 |Funcional | Pseudo aleatorio| 16 |
| F002 |Funcional | Aleatorio | 16 |
| F003 |Funcional | Pseudo aleatorio |16 |
| F003 |Funcional | A priori | 5 |
| F003 |Funcional | Aleatorio | 16 |
| F004 |Funcional | Pseudo aleatorio | 16 |
| F004 |Funcional | A priori | 5 |
| F004 |Funcional | Aleatorio | 16 |

Por cada funcionalidad se harán pruebas con datos a priori guardados en un Array en el código, también se harán pruebas pseudo aleatorias usando el faker con los tipos de datos permitidos por los campos, y se harán pruebas usando el faker con tipos de datos aleatorios.

### Evidencias de las pruebas ejecutadas

* ![Login](https://raw.githubusercontent.com/diazclaudia1/Pruebas_automatizadas/master/Semana_7/CypressProject/cypress/screenshots/login.png)
* ![Settings](https://raw.githubusercontent.com/diazclaudia1/Pruebas_automatizadas/master/Semana_7/CypressProject/cypress/screenshots/settings.png)
* ![Profile](https://raw.githubusercontent.com/diazclaudia1/Pruebas_automatizadas/master/Semana_7/CypressProject/cypress/screenshots/Semana%207%20navegation%202.PNG)
* ![Tags]()


### Pros y Contras de Faker

#### Pros

* Es muy ágil la manera como genera datos y tipos de datos aleatorios sin necesidad de crear pruebas una a una
* Permite hacer gran volumen de pruebas y encontrar validaciones de campos por tipos de datos

#### Contras

* Por la naturaleza de Ghost hay pruebas en donde se no se encuentran fallas y en otras no, ya que cambian los id de los componentes
* Las validaciones de Ghost son bastante acertadas, valida tamaños de los campos, valida nulos, y tipos de datos

#### Conclusiones de las pruebas

* Para la Funcionalidad de Login, no se encontraron errores fuera de los esperado ya que Ghost hace las validaciones de valores nulos, tamaño y tipos de datos
* Para la funcionalidad de Settings, tampoco se encontraron errores porque de igual manera Ghost valida valores, nulos, tamaño y tipos de datos
* Para la funcionalidad de tags, no se encontraron errores porque de igual manera Ghost valida que existan valores nulos, el tamaño de la descripcion y que se tenga un formato hexadecimal.
* Para la funcionalidad de profile, no se encontraron errores porque Ghost valida el formato del email, nulos, tamaño y los tipos de datos.



