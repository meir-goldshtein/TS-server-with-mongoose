
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger Express API',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    tags : [
      {
        name: "User",
        description: "User routes",
      },
      {
        name: "GreenEye",
        description: "GreenEye routes",
      },
      {
        name: "Auth",
        description: "Auth routes",
      },
      {
        name: "Posts",
        description: "Post routes",
      },
      {
        name: "Todos",
        description: "Todo routes",}
    ]
  },

  apis: ['./dist/Routers/*.js'], // Path to your API routes
};

const specs = swaggerJsdoc(options);

export {
  specs,
  swaggerUi,
};