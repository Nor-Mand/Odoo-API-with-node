const express = require('express');
const routerApi = require('./routes');

const server = express();
const port = 5000;

const cors = require('cors');

// middleware
server.use(cors());
server.use(express.json());

// app
routerApi(server)

// server listen port
server.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`));