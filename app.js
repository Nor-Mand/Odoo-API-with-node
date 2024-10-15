const express = require('express');
const app = express();

// documentation
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// // Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
      myapi: '3.0.0',
      info: {
        title: 'Odoo API with node.js',
        version: '1.0.0',
        description: 'API documentation',
      },
      servers: [
        {
          url: 'http://localhost:5000',
        },
      ],
    },
    apis: ['./api/*/*.js'], // files containing annotations as above
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



/******** ROUTES *******/

//------------> Contacts
const odooContacts = require('./api/contacts/contacts')
app.use('/api/contacts', odooContacts);

module.exports = app;