const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})
const Client = require('pg')

const client = new Client({
    // Fill your credential of your odoo.
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
})

module.exports = client;