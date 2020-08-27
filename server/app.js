const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const db = require('./config/db').default;

const app = express();
db();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin: "*"}));

app.use('/', require('./routes/'))

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(PORT, console.log(`listening on ${PORT}`))