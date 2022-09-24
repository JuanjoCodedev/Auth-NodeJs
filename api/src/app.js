const express = require("express");
const cors = require("cors");
const router = require("./routes/index.routes");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(router);

app.use(express.urlencoded({ extended: true }));

module.exports = app;
