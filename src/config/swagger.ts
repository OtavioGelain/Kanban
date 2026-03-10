import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Kanban API',
      version: '1.0.0',
      description: 'API for managing a Kanban board application',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Path to the API docs
};

export const swaggerSpec = swaggerJSDoc(options);
