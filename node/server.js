require('dotenv').config({path: './config/.env'});
const express = require("express");
const app = express();
const path = require("path");

app.engine('html', require('ejs').renderFile);

const connection = require('./controller/dbconn');
app.set('view engine', 'ejs');
app.use(express.static("static"));

app.use(express.json());


const port = process.env.SERVER_PORT || 3000;

app.set("port", port);

const indexRouter = require("./routes/index");

app.use(indexRouter);
app.listen(port, () => console.log("Listening on", port));

module.exports = app;