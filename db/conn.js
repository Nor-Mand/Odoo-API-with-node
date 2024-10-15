const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})
const Client = require('pg').Pool;

const client = new Client({
    // your odoo credential.
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
})

module.exports = client;