# Frontend-Web-Practicas

PRACTICA 7 - 

1. ¿Por qué esta interfaz no menciona Express, NestJS ni memoria?
"Por el principio de Arquitectura Limpia. La capa de dominio define las reglas del negocio y debe ser totalmente independiente de los frameworks o bases de datos que usemos."

2. ¿Qué palabra promete cumplir la interfaz?
"La palabra implements. Es un contrato que obliga a la clase a tener exactamente los métodos que pide la interfaz, de lo contrario, TypeScript no compilará."

3. ¿Por qué el Service no sabe qué es una petición HTTP?
"Por la Separación de Responsabilidades. El Controlador se encarga de todo lo relacionado a HTTP y el Service de la lógica de negocio. Así, el Service puede reutilizarse en cualquier otro contexto (como WebSockets o tareas programadas)."

4. ¿Por qué el Service se inyecta sin token, y el repositorio sí necesita uno?
"Porque las clases (Service) sobreviven al compilar a JavaScript y NestJS puede usarlas directamente. Las interfaces (Repository) desaparecen en JavaScript, así que necesitamos un Token para decirle a NestJS qué clase real debe inyectar en su lugar."

5. ¿Qué prueba, en los hechos, que agregar Miembros no rompió nada de Inscripciones?
"Que al probar los endpoints de /inscripciones en Postman siguen respondiendo con éxito (200/201). A nivel arquitectónico, esto está garantizado porque los Módulos de NestJS aíslan completamente la nueva funcionalidad de la existente."