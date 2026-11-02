# Frontend-Web-Practicas

## PRACTICA 15 - El Gimnasio, Rutas y Layout

1. ¿por qué el 404 sí tiene encabezado y pie?
Porque el router arma una cadena de rutas anidadas. La ruta comodín ("*") está dentro de la ruta del Layout, por lo que el componente NoEncontrado se pinta dentro del <Outlet />. El marco (Encabezado y Pie) se mantiene intacto y sólo cambia lo que va adentro.
2. ¿qué cambia en la pestaña Red si usas <a href> en lugar de Link? Muéstralo con capturas
Con <a href> el navegador pide la página completa otra vez al servidor, generando una petición de tipo "document", volviendo a bajar todo el JavaScript y perdiendo el estado. Con <Link> no hay petición de tipo "document": React cambia la URL en el cliente sin salir de la página y sólo solicita a la API los datos que faltan (Fetch/XHR).
3. ¿en qué tipo de dato llega el id de la URL y qué pasa si no lo conviertes?
Llega siempre como texto (string), porque useParams no sabe qué tipo de dato viaja en la URL. Si no se convierte con Number(id), TypeScript y la función de la API marcarán error, y las comparaciones numéricas fallarán.
4. ¿qué pasa al ir de /clases/1 a /clases/2 si el id no está en las dependencias del efecto?
Al cambiar de dirección entre clases, el componente se reutiliza y no se vuelve a montar. Si el id no está en el arreglo de dependencias de useEffect ([id]), el efecto no detecta el cambio de URL, no hace la petición a la API para la nueva clase y se queda mostrando la información de la clase anterior.