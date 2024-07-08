// Importamos la conexión a la base de datos
import pool from '../index.js';

// Función para crear una nueva tarjeta
const createCard = async (title, description, columnId, userId) => {
  // Realizamos la consulta SQL para insertar una nueva tarjeta en la base de datos
  const result = await pool.query(
    'INSERT INTO cards (title, description, column_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, columnId, userId]
  );
  // Devolvemos la tarjeta creada
  return result.rows[0];
};

// Función para obtener todas las tarjetas de un usuario
const getCards = async (userId) => {
  // Realizamos la consulta SQL para seleccionar todas las tarjetas del usuario especificado
  const result = await pool.query(
    'SELECT * FROM cards WHERE user_id = $1',
    [userId]
  );
  // Devolvemos todas las tarjetas encontradas
  return result.rows;
};

// Función para actualizar una tarjeta existente
const updateCard = async (id, title, description, columnId, userId) => {
  // Realizamos la consulta SQL para actualizar la tarjeta con el ID especificado
  const result = await pool.query(
    'UPDATE cards SET title = $1, description = $2, column_id = $3 WHERE id = $4 AND user_id = $5 RETURNING *',
    [title, description, columnId, id, userId]
  );
  // Devolvemos la tarjeta actualizada
  return result.rows[0];
};

// Función para eliminar una tarjeta existente
const deleteCard = async (id, userId) => {
  // Realizamos la consulta SQL para eliminar la tarjeta con el ID especificado
  const result = await pool.query(
    'DELETE FROM cards WHERE id = $1 AND user_id = $2 RETURNING *',
    [id, userId]
  );
  // Devolvemos la tarjeta eliminada
  return result.rows[0];
};

// Exportamos las funciones para usarlas en otros archivos
export { createCard, getCards, updateCard, deleteCard };
