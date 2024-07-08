// Importamos las bibliotecas necesarias
import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Extraemos Pool de pg para crear una conexión con la base de datos PostgreSQL
const { Pool } = pkg;

// Creamos una nueva conexión a la base de datos PostgreSQL utilizando las variables de entorno
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Creamos una instancia de Express
const app = express();

// Usamos middleware para parsear JSON en las solicitudes
app.use(express.json());

// Importamos las rutas y middleware personalizados
import userRoutes from './routes/userRoutes.js';
import cardRoutes from './routes/cardRoutes.js';
import columnRoutes from './routes/columnRoutes.js';
import { authenticateToken } from './middleware/authMiddleware.js';

// Ruta principal para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Kanban API');
});

// Usamos las rutas para los usuarios
app.use('/api/users', userRoutes);

// Protegemos las rutas siguientes con autenticación
app.use(authenticateToken);

// Usamos las rutas para las tarjetas (cards) y columnas (columns)
app.use('/api/cards', cardRoutes);
app.use('/api/columns', columnRoutes);

// Definimos el puerto en el que el servidor va a escuchar
const port = process.env.PORT || 3001;

// Iniciamos el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Exportamos la conexión a la base de datos para usarla en otros archivos
export default pool;
