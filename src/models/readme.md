biblioteca pg 
Cliente PostgreSQL para Node.js: “pg” es un módulo que permite a las aplicaciones Node.js conectarse y realizar operaciones con bases de datos PostgreSQL.

Funcionalidades: Permite ejecutar consultas, manejar resultados y transacciones, y conectarse a diferentes bases de datos dentro de PostgreSQL.

A diferencia de un ORM, pg no mapea directamente las estructuras de la base de datos a entidades lógicas. En cambio, proporciona funciones para ejecutar consultas SQL y manejar la comunicación con la base de datos.


createCard: Inserta una nueva tarjeta en la base de datos y devuelve la tarjeta creada.
getCards: Obtiene todas las tarjetas de un usuario específico.
updateCard: Actualiza una tarjeta existente y devuelve la tarjeta actualizada.
deleteCard: Elimina una tarjeta existente y devuelve la tarjeta eliminada.
createColumn: Inserta una nueva columna en la base de datos y devuelve la columna creada.
getColumns: Obtiene todas las columnas de un usuario específico.
updateColumn: Actualiza una columna existente y devuelve la columna actualizada.
deleteColumn: Elimina una columna existente y devuelve la columna eliminada.
createUser: Inserta un nuevo usuario en la base de datos y devuelve el usuario creado.
getUserByUsername: Obtiene un usuario por nombre de usuario.
Cada función utiliza la biblioteca pg para interactuar con la base de datos PostgreSQL y realizar las operaciones CRUD necesarias.