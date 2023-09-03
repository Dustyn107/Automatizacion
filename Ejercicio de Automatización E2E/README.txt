=============README===================

Este ejercicio tiene como objetivo probar la compra de 2 productos y su pago, en el sitio web de demostración "https://www.demoblaze.com/". Para ello, utilizaremos Cypress Automation como herramienta de prueba.

Elección de Cypress

Elegí Cypress por su simplicidad y porque es una excelente herramienta de automatización de crecimiento. Está totalmente orientado a JavaScript/MochaJS con nuevas API específicas para facilitar la creación de scripts.

Prerequisitos

Máquina local con el sistema operativo Windows 11
IDE de desarrollo (WebStorm de Intellij version 2023.2 o, Visual StudioCode)
Maven version 3.9.2 (debe estar en la variable de entorno)
JDK versión 1.8 (debe estar en la variable de entorno)

===Dependencias===

- Nodejs 19.9.0
- Cypress v 13.1.0
- npm 9.6.4
- Cypress Mochawesome Reporter 3.5.1
- Instalación de módulos

Vaya a la carpeta raíz del proyecto y ejecute el siguiente comando:
npm install
Siguiente comando para instalar Cypress:
- npm install cypress --save-dev
Ejecución de pruebas con Cypress.js

Primero, asegúrese de que su proyecto se esté ejecutando localmente.

Una vez que su desarrollo local esté ejecutándose y listo, abra una nueva terminal, vaya a la carpeta raíz del proyecto y ejecute el comando:

- npm run cypress:open

===Generación de informe===

El informe se generará en la siguiente ruta:

Cypress\Demoblaze\cypress\reports\html\index.html
Para ver el informe, abra el archivo index.html en un navegador web.





