# Frontend-Web-Practicas

PRACTICA 3 - La Capa de Dominio con Genéricos y Patrones

1. ¿Hizo falta una base de datos real para probar la regla de negocio? ¿Qué dice eso sobre para qué sirve el patrón Repository?

    No hizo falta. Demuestra que el patrón Repository sirve para separar la lógica del negocio del almacenamiento; a las reglas no les importa dónde se guardan los datos

2. El Service recibe el repositorio como Repository<Prestamo>, no InMemoryPrestamoRepository. ¿Qué se rompía si usaban la clase concreta?

    Se rompe el desacoplamiento. Si el Service usa la clase concreta, queda amarrado a trabajar únicamente con memoria, impidiendo cambiar a una base de datos real sin tener que modificar el código del Service.

3. Si cambiaran el Map en memoria por una base de datos real, ¿cuántos archivos tocarían? ¿Por qué tan pocos?

    Solo se modificaría la nueva clase del repositorio que conecte a la base de datos y el archivo main para pasarle la nueva instancia. Son tan pocos porque el Service y las entidades dependen de la interfaz genérica, no de cómo está implementada la persistencia.