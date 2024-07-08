// Importamos la biblioteca jsonwebtoken para manejar tokens JWT
import jwt from 'jsonwebtoken';
// Importamos dotenv para cargar las variables de entorno desde el archivo .env
import dotenv from 'dotenv';
// Cargamos las variables de entorno
dotenv.config();

// Función de middleware para autenticar el token JWT
const authenticateToken = (req, res, next) => {
  // Obtenemos el encabezado de autorización de la solicitud
  const authHeader = req.headers['authorization'];
  // Si el encabezado de autorización existe, obtenemos el token de él
  const token = authHeader && authHeader.split(' ')[1];
  
  // Si no hay token, enviamos una respuesta de error 401 (No autorizado)
  if (token == null) return res.sendStatus(401);

  // Verificamos el token usando la clave secreta
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    // Si hay un error en la verificación, enviamos una respuesta de error 403 (Prohibido)
    if (err) return res.sendStatus(403);
    // Si la verificación es exitosa, añadimos la información del usuario a la solicitud
    req.user = user;
    // Llamamos a la siguiente función en el ciclo de middleware
    next();
  });
};

// Exportamos la función de middleware para usarla en otros archivos
export { authenticateToken };
