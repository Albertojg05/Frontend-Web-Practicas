# Frontend-Web-Practicas

PRACTICA 5 - Mi Primera API con NestJS

1. ¿Qué generó el comando nest new?
Generó el esqueleto inicial de la aplicación con TypeScript configurado, gestión de paquetes, configuración de linters y pruebas, además de la arquitectura modular básica.
2. ¿Qué hace el AppService que ya viene generado?
Encapsula la lógica de negocio básica de la aplicación. Por defecto, provee el método "getHello()" que retorna la cadena "'Hello World!'".
3. ¿Por qué la ruta funciona sin declarar nada en app.module.ts?
Porque "AppController" ya se encuentra registrado dentro del arreglo de "controllers" del decorador, por lo que NestJS mapea automáticamente cualquier endpoint añadido en dicho controlador.
4. ¿Qué pasaría si el cuerpo de la petición viniera vacío?
Al no tener implementados DTOs, la petición se procesaría con un objeto vacío, lo que provocaría que se inserte en el arreglo un elemento sin propiedades o con valores "undefined".
5. ¿En qué archivo vive hoy toda la lógica de la práctica? 
En "app.controller.ts", ya que en él se definieron el almacenamiento en memoria (el arreglo de clases) y los métodos para manejar y procesar las peticiones "GET" y "POST".
