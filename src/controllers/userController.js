// Importamos las bibliotecas necesarias y funciones desde el modelo de usuarios (users)
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, getUserByUsername } from '../models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();  // Cargamos las variables de entorno desde el archivo .env

// Controlador para registrar un nuevo usuario
const register = async (req, res) => {
  try {
    // Extraemos el nombre de usuario y la contraseña desde el cuerpo de la solicitud
    const { username, password } = req.body;

    // Verificamos que username y password no sean undefined
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Hasheamos la contraseña usando bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    // Creamos el usuario usando la función del modelo, pasando el nombre de usuario y la contraseña hasheada
    const user = await createUser(username, hashedPassword);
    
    // Devolvemos el usuario creado como respuesta en formato JSON
    res.json(user);
  } catch (error) {
    // Devolvemos un mensaje de error si algo sale mal
    res.status(500).json({ message: error.message });
  }
};

// Controlador para iniciar sesión de un usuario
const login = async (req, res) => {
  try {
    // Extraemos el nombre de usuario y la contraseña desde el cuerpo de la solicitud
    const { username, password } = req.body;
    
    // Verificamos que username y password no sean undefined
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Obtenemos el usuario usando la función del modelo, pasando el nombre de usuario
    const user = await getUserByUsername(username);
    // Verificamos que el usuario exista y que la contraseña sea correcta
    if (user && await bcrypt.compare(password, user.password)) {
      // Generamos un token JWT para el usuario
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      // Devolvemos el token como respuesta en formato JSON
      res.json({ token });
    } else {
      // Devolvemos un mensaje de error si las credenciales son inválidas
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    // Devolvemos un mensaje de error si algo sale mal
    res.status(500).json({ message: error.message });
  }
};

// Exportamos las funciones del controlador para usarlas en otros archivos
export { register, login };
