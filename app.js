const express = require('express');
const app = express();

/******** ROUTES *******/

//------------> Contacts
const odooContacts = require('./api/contacts/contacs')
app.use('/contacts', odooContacts);

module.exports = app;