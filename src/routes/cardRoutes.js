// Importamos Express para manejar las rutas
import express from 'express';
// Importamos los controladores para manejar las operaciones CRUD de tarjetas
import {
  createCardHandler,
  getCardsHandler,
  updateCardHandler,
  deleteCardHandler
} from '../controllers/cardController.js';

// Creamos un enrutador usando Express
const router = express.Router();

// Ruta para crear una nueva tarjeta
// Maneja solicitudes POST a '/api/cards' y utiliza el controlador createCardHandler
router.post('/', createCardHandler);

// Ruta para obtener todas las tarjetas del usuario autenticado
// Maneja solicitudes GET a '/api/cards' y utiliza el controlador getCardsHandler
router.get('/', getCardsHandler);

// Ruta para actualizar una tarjeta existente
// Maneja solicitudes PUT a '/api/cards/:id' y utiliza el controlador updateCardHandler
// ':id' es un parámetro de ruta que representa el ID de la tarjeta que se va a actualizar
router.put('/:id', updateCardHandler);

// Ruta para eliminar una tarjeta existente
// Maneja solicitudes DELETE a '/api/cards/:id' y utiliza el controlador deleteCardHandler
// ':id' es un parámetro de ruta que representa el ID de la tarjeta que se va a eliminar
router.delete('/:id', deleteCardHandler);

// Exportamos el enrutador para usarlo en otros archivos
export default router;
