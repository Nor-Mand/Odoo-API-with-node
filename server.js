const express = require('express')
const server = express()
const port = 5000
const cors = require('cors')
const app = require('./app')

// middleware
server.use(cors())
server.use(express.json())

// app
server.use(app);

// server listen port
app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`));