# Frontend-Web-Practicas

## PRACTICA 18 - El Gimnasio, Lazy y Zustand

1. ¿cuánto se ahorró y por qué el ahorro es pequeño en esta aplicación?
Unos cuantos kilobytes. Es casi nulo porque la aplicación tiene muy pocas vistas. Lo que más pesa en realidad son herramientas como React, que siempre se tienen que descargar completas al inicio.
2. ¿por qué falla la API si el preview corre en el puerto 4173?
Por seguridad (CORS). El backend está programado para aceptar únicamente conexiones del puerto 5173. Al detectar que intentas conectarte desde el 4173, te desconoce y te bloquea.
3. ¿cuándo conviene un contexto y cuándo un store?
- Contexto: Para datos globales que cambian poco (como saber quién inició sesión).
- Store: Para datos globales que cambian seguido (como agregar o quitar inscripciones), ya que no recarga todo y hace la página más rápida. 