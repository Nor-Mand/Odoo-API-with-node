const express = require('express');
const app = express();

// documentation
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// // Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
      myapi: '1.0.0',
      info: {
        title: 'Odoo API with node.js',
        version: '17.0',
        description: 'API documentation',
      },
      servers: [
        {
          url: 'http://localhost:5000',
        },
      ],
    },
    apis: ['./docs/*.js'], // files containing annotations as above
  };

  
  
  
  /******** ROUTES *******/
  
  //------------> Contacts
  const Contacts = require('./contacts.router')
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  
  
  function routerApi(app){
    
    app.use('/api/contacts', Contacts);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

}

module.exports = routerApi;