// Importamos la conexión a la base de datos
import pool from '../index.js';

// Función para crear una nueva columna
const createColumn = async (name, userId) => {
  // Realizamos la consulta SQL para insertar una nueva columna en la base de datos
  const result = await pool.query(
    'INSERT INTO columns (name, user_id) VALUES ($1, $2) RETURNING *',
    [name, userId]
  );
  // Devolvemos la columna creada
  return result.rows[0];
};

// Función para obtener todas las columnas de un usuario
const getColumns = async (userId) => {
  // Realizamos la consulta SQL para seleccionar todas las columnas del usuario especificado
  const result = await pool.query(
    'SELECT * FROM columns WHERE user_id = $1',
    [userId]
  );
  // Devolvemos todas las columnas encontradas
  return result.rows;
};

// Función para actualizar una columna existente
const updateColumn = async (id, name, userId) => {
  // Realizamos la consulta SQL para actualizar la columna con el ID especificado
  const result = await pool.query(
    'UPDATE columns SET name = $1 WHERE id = $2 AND user_id = $3 RETURNING *',
    [name, id, userId]
  );
  // Devolvemos la columna actualizada
  return result.rows[0];
};

// Función para eliminar una columna existente
const deleteColumn = async (id, userId) => {
  // Realizamos la consulta SQL para eliminar la columna con el ID especificado
  const result = await pool.query(
    'DELETE FROM columns WHERE id = $1 AND user_id = $2 RETURNING *',
    [id, userId]
  );
  // Devolvemos la columna eliminada
  return result.rows[0];
};

// Exportamos las funciones para usarlas en otros archivos
export { createColumn, getColumns, updateColumn, deleteColumn };
