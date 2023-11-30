const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});

console.log(process.env.DB_USER);

const pgConnection = new Client({
    user: process.env.DB_USER, host: process.env.DB_HOST, database: process.env.DB_NAME, password: process.env.DB_PASSWD, port: process.env.DB_PORT,
})

pgConnection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to database");
    }
});

pgConnection.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res.rows[0]);
    }
});
module.exports = pgConnection;