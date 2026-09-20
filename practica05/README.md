# Frontend-Web-Practicas

PRACTICA 4 - De la Capa de Dominio a una API HTTP

1. Express manda los rechazos de un handler async directo al middleware de errores, sin try/catch en cada ruta. ¿Qué tendrían que agregar en cada ruta si esto no fuera así?
   Un bloque try/catch y llamar manualmente a next(error) en el catch
3. ¿Por qué el servicio no lanza directamente un 409 en vez de EjemplarPrestadoError?
   Porque la capa de dominio/servicio debe ser agnóstica a la web.
5. Si mañana agregaran una app móvil que también consume esta API, ¿qué archivos de esta práctica tendrían que tocar?
   Ninguno. La API ya devuelve JSON estándar sobre HTTP, así que la app móvil se conecta directamente usando las mismas rutas sin tener que cambiar nada en el servidor.
