// Importamos la conexión a la base de datos
import pool from '../index.js';

// Función para crear un nuevo usuario
const createUser = async (username, password) => {
  // Realizamos la consulta SQL para insertar un nuevo usuario en la base de datos
  const result = await pool.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    [username, password]
  );
  // Devolvemos el usuario creado
  return result.rows[0];
};

// Función para obtener un usuario por nombre de usuario
const getUserByUsername = async (username) => {
  // Realizamos la consulta SQL para seleccionar el usuario con el nombre de usuario especificado
  const result = await pool.query(
    'SELECT * FROM users WHERE username = $1',
    [username]
  );
  // Devolvemos el usuario encontrado
  return result.rows[0];
};

// Exportamos las funciones para usarlas en otros archivos
export { createUser, getUserByUsername };
