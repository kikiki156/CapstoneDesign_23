const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});

console.log(process.env.DB_USER);

const pgConnection = new Client({
    user: process.env.DB_USER, host: process.env.DB_HOST, database: process.env.DB_NAME, password: process.env.DB_PASSWD, port: process.env.DB_PORT,
})

pgConnection.connect();

pgConnection.query("SET search_path = \"edulog\"", (err, res) => {
    console.log(err, res);
});

module.exports = pgConnection;