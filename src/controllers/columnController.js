// Importamos las funciones necesarias desde el modelo de columnas (columns)
import { createColumn, getColumns, updateColumn, deleteColumn } from '../models/columnModel.js';

// Controlador para crear una nueva columna
const createColumnHandler = async (req, res) => {
  // Extraemos el nombre de la columna desde el cuerpo de la solicitud
  const { name } = req.body;
  
  // Creamos la columna usando la función del modelo, pasando el userId del usuario autenticado
  const column = await createColumn(name, req.user.id);
  
  // Devolvemos la columna creada como respuesta en formato JSON
  res.json(column);
};

// Controlador para obtener todas las columnas del usuario autenticado
const getColumnsHandler = async (req, res) => {
  // Obtenemos las columnas usando la función del modelo, pasando el userId del usuario autenticado
  const columns = await getColumns(req.user.id);
  
  // Devolvemos las columnas obtenidas como respuesta en formato JSON
  res.json(columns);
};

// Controlador para actualizar una columna existente
const updateColumnHandler = async (req, res) => {
  // Extraemos el id de la columna desde los parámetros de la solicitud
  const { id } = req.params;
  // Extraemos el nombre de la columna desde el cuerpo de la solicitud
  const { name } = req.body;
  
  // Actualizamos la columna usando la función del modelo, pasando los datos y el userId del usuario autenticado
  const column = await updateColumn(id, name, req.user.id);
  
  // Devolvemos la columna actualizada como respuesta en formato JSON
  res.json(column);
};

// Controlador para eliminar una columna existente
const deleteColumnHandler = async (req, res) => {
  // Extraemos el id de la columna desde los parámetros de la solicitud
  const { id } = req.params;
  
  // Eliminamos la columna usando la función del modelo, pasando el id y el userId del usuario autenticado
  const column = await deleteColumn(id, req.user.id);
  
  // Devolvemos la columna eliminada como respuesta en formato JSON
  res.json(column);
};

// Exportamos las funciones del controlador para usarlas en otros archivos
export { createColumnHandler, getColumnsHandler, updateColumnHandler, deleteColumnHandler };
