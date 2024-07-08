# Kanban API

## Endpoints

### User

- `POST /api/users/register`: Registro de un nuevo usuario.
  - Body: `{ "username": "string", "password": "string" }`

- `POST /api/users/login`: Inicio de sesión.
  - Body: `{ "username": "string", "password": "string" }`

### Cards

- `POST /api/cards`: Crear una nueva card.
  - Body: `{ "title": "string", "description": "string", "columnId": "integer" }`

- `GET /api/cards`: Obtener todas las cards del usuario autenticado.

- `PUT /api/cards/:id`: Actualizar una card existente.
  - Body: `{ "title": "string", "description": "string", "columnId": "integer" }`

- `DELETE /api/cards/:id`: Eliminar una card existente.

### Columns

- `POST /api/columns`: Crear una nueva columna.
  - Body: `{ "name": "string" }`

- `GET /api/columns`: Obtener todas las columnas del usuario autenticado.

- `PUT /api/columns/:id`: Actualizar una columna existente.
  - Body: `{ "name": "string" }`

- `DELETE /api/columns/:id`: Eliminar una columna existente.

## Autenticación y Autorización

- Todos los endpoints de `cards` y `columns` están protegidos y requieren un token JWT en el encabezado `Authorization` en formato `Bearer <token>`.

## Configuración y Ejecución

1. Clonar el repositorio.
2. Configurar las variables de entorno en un archivo `.env`.
3. Ejecutar el servidor:
   ```bash
   npm install
   npm start
