# Frontend-Web-Practicas

Paso 2: ¿Hubo algún error, alguna advertencia o algo en la consola que avisara?
No, en la consola solo se imprimió un resultado ignorando que se estaba tratando de sumar 2 tipos diferentes. JavaScript no lo toma como error porque está diseñado con un sistema de tipado débil que hace una conversión automática en lugar de mandar una excepción.

Paso 3: Si el archivo tiene un error de tipos, ¿por qué node lo ejecuta? ¿Cuál comando revisa y cuál ejecuta?
Porque Node ignora las reglas y tipos de TypeScript. A Node solo le interesa hacer funcionar el código base. 
El que revisa (los tipos): npx tsc --noEmit.  
El que ejecuta (el código): node multas.ts.

Paso 4: De las dos líneas que usan const, ¿por qué sólo una falla?
Porque const no te deja cambiar la variable completa por otra cosa, pero sí te permite modificar lo que tiene adentro
Al asignarle un texto a la variable con let, nadie escribió que fuera un número. ¿De dónde salió ese tipo?
Salió de la inferencia de tipos: TypeScript vio que le asignaste un número al inicio y automáticamente le puso ese tipo.

Paso 5:
Error 1: Omitir una propiedad
Qué esperaba: Un objeto que contenga la propiedad obligatoria.
Qué recibió: Un objeto sin la propiedad multa.
Línea: 25
Error: TS2741: Property 'multa' is missing in type '{ ejemplar: number; estado: "activo"; socio: string; }' but required in type 'Prestamo'.
Error 2: Estado no valido
Qué esperaba: Un valor en minúsculas del tipo Estado.
Qué recibió: El string 'VENCIDO' en mayúsculas.
Línea: 26
Error: TS2820: Type '"VENCIDO"' is not assignable to type 'Estado'. Did you mean '"vencido"'?
Error 3: Tipo incompatible
Qué esperaba: Un valor de tipo string para la propiedad socio.
Qué recibió: Un valor de tipo number.
Línea: 26
Error: TS2322: Type 'number' is not assignable to type 'string'.
