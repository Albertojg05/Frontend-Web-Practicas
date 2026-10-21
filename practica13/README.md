# Frontend-Web-Practicas

## PRACTICA 13 - La Tienda

1. ¿por qué el Layout no necesita saber que es una tienda?
Porque utiliza composición mediante children; solo actúa como contenedor estructural agnóstico al contenido
2. ¿qué pasa si escribes onClick={onAgregar(producto)} sin la flecha?
La función se invoca de inmediato en tiempo de renderizado y no al hacer clic, provocando re-renders infinitos si modifica estado
3. ¿por qué con carrito.push(...) el contador no se mueve y no sale ningún error?
Porque muta el arreglo existente manteniendo la misma referencia de memoria en el objeto; React realiza una comparación superficial Object.is y asume que el estado no cambió, evitando el re-render