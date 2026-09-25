# Frontend-Web-Practicas

PRACTICA 6 - 

1. ¿qué pasaría si el módulo no quedara registrado en la raíz?
NestJS no lo reconocería ni cargaría sus rutas. Si intentas hacer peticiones a sus endpoints, la API te va a responder con un 404 Not Found.
2. ¿por qué los métodos del repositorio devuelven promesas si los datos van a estar en memoria?
Para simular el comportamiento real de una base de datos. Como en el mundo real las consultas son asíncronas, devolver promesas permite que el código use async/await desde ya, y si más adelante cambias la memoria por una base de datos real, no tienes que reescribir la lógica ni cambiar firmas.
3. ¿qué error apareció al cambiar a la interfaz, y por qué la clase sí se había resuelto sola?
NestJS lanza un error diciendo que no puede resolver las dependencias del servicio, las clases existen tanto en TypeScript como en JavaScript compilado, así que NestJS las usa directamente para saber qué inyectar. Las interfaces solo existen en TypeScript y se borran al compilar, por lo que en tiempo de ejecución no hay nada para que NestJS sepa qué clase meter ahí.
4. ¿por qué el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?
Porque el servicio es una clase concreta, así que existe en runtime y funciona como su propio identificador. En cambio, el repositorio se declara como una interfaz, y como desaparece al compilar, ocupas a fuerza un token para decirle a NestJS qué clase usar.
5. ¿cuál es la diferencia entre un 400 y un 409?
400: La petición viene mal armada por el cliente y 409: La petición viene bien escrita, pero no se puede aplicar porque choca con las reglas o el estado actual del sistema
6. ¿por qué cambió el código de estado de esa última petición?
Porque al cancelar una inscripción, se liberó un cupo en el horario. Como la regla solo cuenta las inscripciones confirmadas para checar el límite, al volver a mandar la petición ya había lugar disponible y pasó con un 201 Created en lugar del 409 Conflict.