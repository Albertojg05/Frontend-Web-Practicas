# Frontend-Web-Practicas

## PRACTICA 16 - El Gimnasio, Sesión con JWT

1. ¿por qué se usa un contexto y no props para la sesión?
Porque los datos de la sesión se ocupan en casi toda la página. Si usamos props, tendríamos que ir pasando los datos de componente en componente uno por uno (como en una cadena).
2. ¿qué pasa si un componente usa la sesión fuera del proveedor?
La página simplemente truena. Esto pasa porque nuestro código (useSesion) está programado a propósito para revisar si está dentro de la "burbuja" del <ProveedorSesion>. Si un componente de afuera intenta usarlo, se asusta y lanza una excepción.
3. ¿dónde se guarda el token y qué riesgo tiene ese lugar?
Lo guardamos en el localStorage. El riesgo es que cualquier código de JavaScript que corra en nuestra página tiene acceso a ese almacenamiento. Si un atacante logra meter un script malicioso en nuestra web, podría leer nuestro localStorage y robarnos el token fácilmente.