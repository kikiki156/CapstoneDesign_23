const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});

console.log(process.env.DB_USER);

const pgConnection = new pg.Pool({
    user: process.env.DB_USER, host: process.env.DB_HOST, database: process.env.DB_NAME, password: process.env.DB_PASSWD, port: process.env.DB_PORT,
})

pgConnection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to database");
    }
});

pgConnection.query("SELECT NOW()")
    .then((res) => console.log(res.rows[0]))
    .catch((err) => console.log(err));
module.exports = pgConnection;