# Frontend-Web-Practicas

## PRACTICA 17 - El Gimnasio, Rutas Protegidas

1. ¿la ruta protegida hace segura la aplicación? ¿Qué es lo que de verdad protege los datos?
No. Ocultar vistas en el frontend solo mejora la experiencia del usuario. Lo que realmente protege los datos es el backend, ya que siempre exige un token válido para procesar cualquier petición.
2. ¿por qué no se manda el miembroId al inscribirse?
Por seguridad. El backend extrae tu ID directamente leyendo tu token. Si lo mandaras de forma manual desde el frontend, un atacante podría cambiar ese número para inscribir a otras personas.
3. ¿qué diferencia hay entre un 401 y un 403?
- 401: "No sé quién eres" (te falta el token, es inválido o ya expiró).
- 403: "Sé quién eres, pero no tienes permiso" (tienes token válido, pero tu rol no te deja hacer esa acción).