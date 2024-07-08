// Importamos Express para manejar las rutas
import express from 'express';
// Importamos los controladores para manejar el registro y login de usuarios
import { register, login } from '../controllers/userController.js';

// Creamos un enrutador usando Express
const router = express.Router();

// Ruta para registrar un nuevo usuario
// Maneja solicitudes POST a '/api/users/register' y utiliza el controlador register
router.post('/register', register);

// Ruta para iniciar sesión de un usuario
// Maneja solicitudes POST a '/api/users/login' y utiliza el controlador login
router.post('/login', login);

// Exportamos el enrutador para usarlo en otros archivos
export default router;
