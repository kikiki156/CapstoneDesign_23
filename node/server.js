require('dotenv').config({path: './config/.env'});
const express = require("express");
const app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');


app.use(express.json());


const port = process.env.SERVER_PORT || 3000;

app.set("port", port);

const indexRouter = require("./routes/index");

app.use(indexRouter);
app.listen(port, () => console.log("Listening on", port));

module.exports = app;