======README=======
Pruebas de API con Karate en DemoBlaze.

Este proyecto contiene pruebas automatizadas de API utilizando la herramienta Karate en la página web de DemoBlaze. Las pruebas se centran en la funcionalidad de registro (signup) y inicio de sesión (login) de la API proporcionada por DemoBlaze.

===Descripción general===
Las pruebas de este proyecto se centran en los siguientes escenarios:

- Crear un nuevo usuario en signup en la API de DemoBlaze.
- Intentar crear un usuario ya existente en la API de DemoBlaze.
- Usuario y password correcto en login en la API de DemoBlaze.
- Usuario y password incorrecto en login en la API de DemoBlaze

Pre-requisitos
Para ejecutar este proyecto, debes tener instalado lo siguiente:

-Java 11 o superior.
-Maven o Gradle.
-Un IDE de desarrollo, como IntelliJ IDEA, Eclipse, tambien se puede utilizar Visual Studio Code.

Instalación
Para instalar este proyecto, ejecuta los siguientes comandos:

maven:
mvn install

gradle:

gradle install

Se agregan dos esenarios por Feature.


