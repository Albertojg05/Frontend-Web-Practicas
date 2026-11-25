# Frontend-Web-Practicas

## PRACTICA 21 - El Panel del Gimnasio, Rutas, Formulario y la API

1. ¿qué pieza de React Router corresponde a router-outlet, a routerLink y a routerLinkActive?
router-oulet = <Oulet/>, routerLink = <Link to="..."> y routerLinkActive = <NavLink>
2. ¿por qué la ruta comodín (**) va al final y la ruta vacía necesita pathMatch: 'full'?
Porque Angular revisa las rutas en orden: si ** estuviera antes atraparía todas las URLs y nada de lo que sigue funcionaría. Y la ruta vacía ('') necesita pathMatch: 'full' para que solo coincida cuando la URL esté completamente vacía y no con cualquier ruta.
3. Responder: ¿dónde vive el valor de un campo en un formulario reactivo y en qué se diferencia del useState de React?
Vive dentro de un FormControl en el archivo TypeScript. A diferencia de useState en React (donde normalmente manejas cada valor y validación por separado), FormControl ya trae integrado el valor, las validaciones y el estado del campo (si fue tocado, editado o si es válido).
4. ¿qué regresa un validador propio cuando el valor es válido y cuando no, y cómo se relaciona con hasError?
Regresa null si es válido, o un objeto con el nombre del error (por ejemplo { multiploDe: true }) si falla. hasError('multiploDe') simplemente busca esa clave en el objeto para saber si debe mostrar el mensaje de error.
5. ¿qué cambió en el servicio del catálogo y por qué ningún componente se enteró?
Se cambió la lista local de clases por un httpResource que trae los datos de GET /clases. Los componentes no se enteraron porque siguen leyendo las mismas propiedades del servicio, sin importar de dónde vengan los datos.
6. ¿por qué no hizo falta iniciar sesión para leer el catálogo?
Porque el endpoint GET /clases está configurado como público en el backend y no pide token de autenticación.

