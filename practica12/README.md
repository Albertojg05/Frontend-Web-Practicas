# Frontend-Web-Practicas

## PRACTICA 12 - Hola react

1. ¿En qué se convirtió cada etiqueta del JSX?
Cada etiqueta JSX se convirtió en una llamada a funciones del runtime moderno de React, específicamente `_jsx` o `_jsxs` importadas automáticamente desde el módulo `react/jsx-runtime`. Ya no requiere importar `React` manualmente en cada archivo.
2. si React es «sólo una biblioteca», ¿quién traduce el JSX?
JSX no es sintaxis válida de JavaScript estándar y los navegadores web no lo comprenden de forma nativa. Quien realiza la traducción es un compilador. 
El compilador analiza el código fuente en tiempo de desarrollo o construcción y sustituye la sintaxis declarativa de etiquetas JSX por llamadas a funciones JavaScript puras (`React.createElement` o `_jsx`).
3.  ¿qué hace createRoot y qué hace render?
createRoot: Toma un elemento del DOM real del navegador (típicamente el `<div id="root"></div>`) y crea un contenedor o raíz de React. Inicializa el árbol de componentes y habilita las características de concurrencia de React.
render: Es el método perteneciente a la raíz creada con `createRoot`. Se encarga de procesar el árbol de elementos virtuales de React (V-DOM), calcular las operaciones necesarias y montar/dibujar la estructura resultante dentro del nodo del DOM real correspondiente.
4. ¿por qué el nombre de un componente empieza con mayúscula?
Porque es la convención sintáctica fundamental que utiliza el compilador/transpilador (SWC, Babel, OXC) para diferenciar elementos HTML nativos de componentes personalizados:
Si el identificador inicia con **minúscula** (ej. `<button>`, `<div>`), el compilador lo interpreta como una etiqueta nativa del navegador y pasa el nombre como un literal de cadena: `_jsx("button", ...)`.
Si el identificador inicia con **mayúscula** (ej. `<Saludo>`, `<TarjetaPerfil>`), el compilador lo reconoce como un componente personalizado y pasa la referencia directa de la función o clase JavaScript: `_jsx(Saludo, ...)`.