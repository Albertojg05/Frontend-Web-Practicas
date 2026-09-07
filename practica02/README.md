# Frontend-Web-Practicas

PRACTICA 2 - MOSTRADOR DE LA BIBLIOTECA RESPUESTAS

¿por qué una unión de valores y no una enumeración?
No mete código extra a JavaScript: La unión de textos ('activo' | 'devuelto' | 'vencido') desaparece por completo cuando TypeScript se compila. Un enum, en cambio, crea un objeto real en el archivo .js final que ocupa espacio sin necesidad.
¿qué se gana con el tipo desconocido en lugar del que acepta todo?
any apaga las alarmas del compilador: te deja hacer lo que sea con la variable y, si te equivocas, el programa truena hasta que está corriendo.  
unknown te obliga a ir a la segura: no te permite usar el dato hasta que verifiques primero con un if o typeof qué tipo de valor es realmente. 
¿por qué la fecha entra como parámetro?
Para poder simular cualquier día: Si usas new Date() adentro de la función, quedas atado a la fecha y hora de ese instante. Al pasarla como parámetro, puedes probar préstamos entregados a tiempo, préstamos vencidos hace 5 días o multas futuras sin tener que cambiarle la hora al reloj de tu computadora.
