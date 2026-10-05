# Frontend-Web-Practicas

PRACTICA 8 - Prisma: esquema y migraciones

1. ¿editar schema.prisma cambió algo en la base de datos antes de migrar?
No, porque el esquema es solo un archivo de texto y la base de datos no se modifica hasta que ejecutas el comando de migración
2. ¿la carpeta de migraciones es una foto del esquema o un historial?
Es un historial, ya que Prisma no reescribió la migración inicial, sino que agregó una segunda carpeta con el cambio incremental, formando una línea de tiempo
3. ¿por qué Horario.clase sí crea columna y Clase.horarios no?
Horario.clase es el lado que lleva la directiva @relation(fields: [claseId], ...) y declara físicamente la llave foránea, ya que en una relación uno-a-muchos la llave siempre vive del lado "muchos". Por su parte, Clase.horarios no crea columna porque es solo un campo virtual que Prisma te regala como vista inversa para facilitar las consultas desde tu código; en una sola columna SQL no caben "muchos" IDs.
4. ¿de dónde sale la relación de muchos a muchos entre Miembro y Horario, si nunca se declaró?
esta relación se forma implícitamente porque Inscripcion tiene dos relaciones de uno-a-muchos: una hacia Horario y otra hacia Miembro. Toda relación de muchos-a-muchos se construye mediante una tabla intermedia.

