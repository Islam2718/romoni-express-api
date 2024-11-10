// Other imports
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Middleware
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Romoni Express API');
});

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Romoni Express API',
        version: '1.0.0',
        description: 'API documentation for Romoni Express',
      },
      servers: [
        {
          url: "http://localhost:3000/api",
        }
      ],
      components: {
        schemas: {
          User: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 1,
              },
              name: {
                type: "string",
                example: "John Doe",
              },
              email: {
                type: "string",
                example: "johndoe@example.com",
              },
            },
          },
        },
      },
    },
    apis: ['./src/routes/*.js'], // Adjust to match the actual path of your route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// API routes
app.use('/api', routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
