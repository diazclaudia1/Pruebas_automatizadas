# Test semana 7

# Guía de despliegue Cypress

1. Para desplegar se debe ejecutar el desde la carpeta raíz del proyecto el comando `./node_modules/.bin/cypress open`, por ejemplo:

CypressProject -> Desde acá
<br>  * cypress
<br>   * cypress.json
<br>    * node_modules
<br>    * package-lock.json

![Directorio]()

2. Al abrir Cypress se debe hacer clic en el archivo sem_7_testing_login.spec.js, sem_7_testing_settings.js, sem_7_testing_profile.js, sem_7_testing_tags.js que se encuentran fuera de la carpeta examples:

![Ejecutar]()


# Funcionalidades bajo pruebas

| Id   | Nombre | Resumen| 
| ---- | ----- | ----- |
| F001 | Login | Permite iniciar una sesión con cada usuario. |
| F002 | Settings generales | Permite modificar la información de la página como el título, la zona horaria, el lenguaje, el logo, etc. |
| F003  | Profile   | Permite ver mi información como usuario y modificarlo. |
| F004  | Tags |    Permite crear los tags que serán usados por las páginas.|


# Escenarios por funcionalidad bajo pruebas

| Id Funcionalidad | Requerimiento |Tipo | Total Pruebas|
| ---- | ----- | ----- | —— | 
| F001 |Funcional | A priori| 5 |
| F001 |Funcional | Pseudo aleatorio| 16 |
| F001 |Funcional | Aleatorio | 16|
| F002 |Funcional | A priori| 5 |
| F002 |Funcional | Pseudo aleatorio| 16 |
| F002 |Funcional | Aleatorio | 16 |
| F003 |Funcional | Pseudo aleatorio |
| F003 |Funcional | A priori |
| F003 |Funcional | Aleatorio |
| F004 |Funcional | Pseudo aleatorio |
| F004 |Funcional | A priori |
| F004 |Funcional | Aleatorio |

Por cada funcionalidad se harán pruebas con datos a priori guardados en un Array en el código, también se harán pruebas pseudo aleatorias usando el faker con los tipos de datos permitidos por los campos, y se harán pruebas usando el faker con tipos de datos aleatorios.

# Evidencias de las pruebas ejecutadas

* ![Login]()
* ![Settings]()
* ![Profile]()
* ![Tags]()


# Pros y Contras de Faker

## Pros

* Es muy ágil la manera como genera datos y tipos de datos aleatorios sin necesidad de crear pruebas una a una
* Permite hacer gran volumen de pruebas y encontrar validaciones de campos por tipos de datos

## Contras

* Por la naturaleza de Ghost hay pruebas en donde se no se encuentran fallas y en otras no, ya que cambian los id de los componentes
* Las validaciones de Ghost son bastante acertadas, valida tamaños de los campos, valida nulos, y tipos de datos

# Conclusiones de las pruebas

* Para la Funcionalidad de Login, no se encontraron errores fuera de los esperado ya que Ghost hace las validaciones de valores nulos, tamaño y tipos de datos
* Para la funcionalidad de Settings, tampoco se encontraron errores porque de igual manera Ghost valida valores, nulos, tamaño y tipos de datos