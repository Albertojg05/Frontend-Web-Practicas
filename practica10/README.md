# Frontend-Web-Practicas

## PRACTICA 10 - Blindar la API, JWT y OpenAPI

### Parte 1
1. ¿Por qué el filtro atrapa la clase base y no cada error por separado?
Porque al atrapar la clase base (`ErrorDeDominio`), gracias a la herencia y el polimorfismo, el filtro atrapa automáticamente a todas sus clases hijas (como `CupoLlenoError`, `HorarioNoEncontradoError`, etc.). Esto nos permite centralizar el manejo de errores sin tener que modificar el filtro cada vez que agreguemos una nueva excepción de negocio en el futuro.
2. ¿Por qué este middleware no podría decidir si un usuario tiene permiso para una ruta?
Porque el middleware de Express se ejecuta al inicio del ciclo de vida de la petición HTTP, antes de que el enrutador de NestJS sepa qué controlador o método específico va a atender la solicitud. Por lo tanto, el middleware no tiene acceso al contexto de ejecución ni a los metadatos (como los decoradores `@Publico()` o `@Roles()`).

3. ¿Por qué la petición que responde 409 no aparece en ese registro (del interceptor)?
Porque los interceptores (específicamente en la parte que usa el operador `tap()`) envuelven el flujo normal de éxito. Cuando el servicio lanza una excepción de dominio (como `CupoLlenoError`), el flujo se corta abruptamente y salta directamente al `ExceptionFilter`, por lo que se omite el bloque `tap()` del interceptor.

4. ¿Por qué este cambio (sobre) rompe a cualquier cliente que ya estuviera usando la API?
Porque muta drásticamente la estructura de la respuesta JSON. Si un cliente (frontend o aplicación móvil) esperaba iterar sobre un arreglo directo (`[{...}, {...}]`), ahora fallará porque recibirá un objeto JSON donde los datos están anidados dentro de una propiedad `data` (`{ "data": [...], "meta": {...} }`).

5. Si el servidor respondió en los dos casos (CORS), ¿quién bloquea y a quién protege?
Quien bloquea la respuesta final es el **navegador web** del usuario (como Chrome o Firefox). Lo hace para proteger al **usuario**, evitando que un sitio web malicioso de un origen distinto (ej. `localhost:4000`) pueda leer respuestas de nuestra API utilizando la sesión o cookies del usuario sin su autorización.

### Parte 2
6. ¿Por qué el campo se llama `passwordHash` y no `password`?
Para hacer completamente explícito en el modelo y en el código que el valor almacenado es un hash ilegible, no la contraseña en texto plano. Esto ayuda a prevenir errores por descuido de los programadores, como devolver la contraseña al cliente en un DTO de respuesta o guardar texto plano en la base de datos.

7. ¿Por qué los dos errores del inicio de sesión dicen exactamente lo mismo?
Para prevenir ataques de "enumeración de usuarios" (User Enumeration). Si la API diferenciara el mensaje ("Usuario no encontrado" vs "Contraseña incorrecta"), un atacante podría enviar una lista de miles de correos electrónicos y adivinar cuáles de ellos pertenecen a usuarios reales registrados en el sistema del gimnasio basándose en la respuesta.

8. Si el contenido del token se puede leer, ¿qué es lo que protege la firma?
La firma protege la **integridad** y **autenticidad** del token. Aunque cualquier persona pueda decodificar la parte del *Payload* en internet para ver su contenido, si intenta alterar algún valor (por ejemplo, cambiar su rol de "miembro" a "admin"), la validación de la firma fallará en el servidor. El atacante no conoce el `JWT_SECRET` necesario para generar la firma criptográfica correcta para ese nuevo payload modificado.

9. ¿Por qué es más seguro proteger todo y abrir a mano, que al revés?
Porque sigue el principio de "Seguro por defecto" (Fail-safe defaults). Si un programador olvida agregar un decorador a una ruta nueva, esta quedará protegida y el cliente recibirá un error `401 Unauthorized` (lo cual es muy notorio y se arregla rápido). Si fuera al revés y el programador olvida proteger una ruta, esta quedaría expuesta públicamente a internet, creando una vulnerabilidad grave y silenciosa.

10. ¿Cuál es la diferencia entre un 401 y un 403?
-401 Unauthorized: Significa "No sé quién eres" (el cliente no envió token, o el token es inválido/vencido).
-403 Forbidden: Significa "Sí sé quién eres (tu token es válido), pero no tienes los permisos o el rol necesario para realizar esta acción específica".

11. ¿Cuántas líneas del `AuthService` tuvieron que cambiar para pasar de memoria a MySQL? ¿Por qué?
Cero (0) líneas. Esto se debe a que se aplicó el patrón *Repository* y la *Inyección de Dependencias*. El `AuthService` solo depende de una abstracción (la interfaz `UsuarioRepository`), por lo que no le importa si los datos se guardan en un mapa temporal o en MySQL. El único cambio ocurrió en `auth.module.ts` al indicarle al proveedor qué clase inyectar.

12. ¿Por qué es importante tomar al usuario de los *claims* del token y no de un parámetro de la URL o del cuerpo? Da un ejemplo concreto.
Porque los parámetros en la URL y el JSON del *body* están bajo el control total del cliente y pueden ser manipulados libremente. Por ejemplo, si la API confiara en el body (`{"miembroId": 3}`), un usuario autenticado y con malas intenciones (ej. Karla, con `miembroId: 1`) podría falsificar la petición enviando el ID de otra persona y terminar cancelando la clase de Sofía (la miembro 3). Al usar los *claims* del token, garantizamos la identidad inmutable del usuario autenticado, ya que el cliente no puede alterar ese payload sin romper la firma del token.