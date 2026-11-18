# Frontend-Web-Practicas

## PRACTICA 19 - El panel del gimnasio: el tablero en Angular

1. ¿qué archivo de Angular hace el papel de main.tsx, de App.tsx y de vite.config.ts?
- main.tsx -> src/main.ts (es el archivo principal que arranca la aplicación)
- App.tsx -> src/app/app.ts y src/app/app.html (son la lógica y vista del componente raíz).
- vite.config.ts -> angular.json (es el archivo donde se configura el proyecto, estilos, assets y la compilación).
2. ¿por qué clase() lleva paréntesis y para qué sirve track?
- Porque input() crea una Signal (señal) en Angular, y las señales son funciones. Se le ponen paréntesis para ejecutarla y obtener el valor actual que tiene guardado.
- Track sirve para darle un identificador único (como el id) a cada elemento dentro de un @for. Así Angular sabe exactamente qué tarjeta cambió o se borró sin tener que volver a dibujar toda la lista desde cero.