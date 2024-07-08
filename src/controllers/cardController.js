// Importamos las funciones necesarias desde el modelo de tarjetas (cards)
import { createCard, getCards, updateCard, deleteCard } from '../models/cardModel.js';

// Controlador para crear una nueva tarjeta (card)
const createCardHandler = async (req, res) => {
  // Extraemos título, descripción y columnaId del cuerpo de la solicitud
  const { title, description, columnId } = req.body;
  
  // Creamos la tarjeta usando la función del modelo, pasando el userId del usuario autenticado
  const card = await createCard(title, description, columnId, req.user.id);
  
  // Devolvemos la tarjeta creada como respuesta en formato JSON
  res.json(card);
};

// Controlador para obtener todas las tarjetas del usuario autenticado
const getCardsHandler = async (req, res) => {
  // Obtenemos las tarjetas usando la función del modelo, pasando el userId del usuario autenticado
  const cards = await getCards(req.user.id);
  
  // Devolvemos las tarjetas obtenidas como respuesta en formato JSON
  res.json(cards);
};

// Controlador para actualizar una tarjeta existente
const updateCardHandler = async (req, res) => {
  // Extraemos el id de la tarjeta desde los parámetros de la solicitud
  const { id } = req.params;
  // Extraemos título, descripción y columnaId desde el cuerpo de la solicitud
  const { title, description, columnId } = req.body;
  
  // Actualizamos la tarjeta usando la función del modelo, pasando los datos y el userId del usuario autenticado
  const card = await updateCard(id, title, description, columnId, req.user.id);
  
  // Devolvemos la tarjeta actualizada como respuesta en formato JSON
  res.json(card);
};

// Controlador para eliminar una tarjeta existente
const deleteCardHandler = async (req, res) => {
  // Extraemos el id de la tarjeta desde los parámetros de la solicitud
  const { id } = req.params;
  
  // Eliminamos la tarjeta usando la función del modelo, pasando el id y el userId del usuario autenticado
  const card = await deleteCard(id, req.user.id);
  
  // Devolvemos la tarjeta eliminada como respuesta en formato JSON
  res.json(card);
};

// Exportamos las funciones del controlador para usarlas en otros archivos
export { createCardHandler, getCardsHandler, updateCardHandler, deleteCardHandler };
