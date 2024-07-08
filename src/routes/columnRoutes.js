// Importamos Express para manejar las rutas
import express from 'express';
// Importamos los controladores para manejar las operaciones CRUD de columnas
import {
  createColumnHandler,
  getColumnsHandler,
  updateColumnHandler,
  deleteColumnHandler
} from '../controllers/columnController.js';

// Creamos un enrutador usando Express
const router = express.Router();

// Ruta para crear una nueva columna
// Maneja solicitudes POST a '/api/columns' y utiliza el controlador createColumnHandler
router.post('/', createColumnHandler);

// Ruta para obtener todas las columnas del usuario autenticado
// Maneja solicitudes GET a '/api/columns' y utiliza el controlador getColumnsHandler
router.get('/', getColumnsHandler);

// Ruta para actualizar una columna existente
// Maneja solicitudes PUT a '/api/columns/:id' y utiliza el controlador updateColumnHandler
// ':id' es un parámetro de ruta que representa el ID de la columna que se va a actualizar
router.put('/:id', updateColumnHandler);

// Ruta para eliminar una columna existente
// Maneja solicitudes DELETE a '/api/columns/:id' y utiliza el controlador deleteColumnHandler
// ':id' es un parámetro de ruta que representa el ID de la columna que se va a eliminar
router.delete('/:id', deleteColumnHandler);

// Exportamos el enrutador para usarlo en otros archivos
export default router;
