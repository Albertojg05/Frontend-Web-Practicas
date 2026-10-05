# Frontend-Web-Practicas

PRACTICA 9 - Blindar la API

1. ¿qué línea del Service o del Controller tuvo que cambiar para que Clases hablara con MySQL?
Ninguna. Gracias a la inyección de dependencias, las capas usan interfaces; el cambio de base de datos fue transparente para la lógica.
2. ¿por qué InscripcionesService no tuvo que cambiar ni una línea de las reglas de cupo y duplicados?
Por la separación de responsabilidades. La lógica de negocio está en el servicio, solo cambiamos la capa de persistencia de datos.
3. ¿por qué una interfaz no puede validar nada en tiempo de ejecución?
Porque las interfaces de TypeScript desaparecen al compilar a JavaScript. Las clases sí se mantienen para poder usar los decoradores.
4. ¿qué código de estado responde y qué trae en el cuerpo?
Responde con un código 400 Bad Request. En el cuerpo incluye un JSON con una propiedad message detallando exactamente el error.
5. ¿cuántas líneas quedó más corto el controlador?
Entre 20 y 30 líneas, al eliminar los bloques try/catch y centralizar el manejo de errores en el filtro.
6. ¿quién bloquea realmente y a quién protege?
El navegador web es quien bloquea realmente la lectura, y lo hace para proteger al usuario de que otros sitios roben su información.