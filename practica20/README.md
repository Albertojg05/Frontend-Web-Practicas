# Frontend-Web-Practicas

## PRACTICA 20 -  El panel del gimnasio: signals, un servicio y el filtro

1. ¿qué diferencia hay entre un signal y un computed, y cuál se parece a useState y cuál a useMemo?
- Un signal guarda un dato que sí puedes modificar directamente, y un computed es solo de lectura y se calcula solo usando otros signals.
- El signal se parece a useState y el computed se parece a useMemo.
2. ¿qué pasa si el filtro hace new Catalogo() en lugar de inject(Catalogo)?
- Se crearía un catálogo nuevo y aparte solo para el filtro. Al filtrar, el tablero principal no cambiaría nada porque no estarían compartiendo los mismos datos.