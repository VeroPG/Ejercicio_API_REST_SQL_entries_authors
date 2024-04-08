const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: "5432",
    database: "postgres",
    password: "123456",
});


// Datos de conexión
/* const pool = new Pool({ 
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE, 
    host: process.env.PG_HOST,
    port: process.env.PG_PORT, 
    password: process.env.PG_PASSWORD 
})
 */
  
module.exports = pool;