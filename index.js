"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;

require("express-async-errors");

const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(require("./src/middlewares/logger"));

app.use(require("./src/middlewares/authentication"));

app.use(require("./src/middlewares/queryHandler"));

app.use("/", require("./src/routes/"));

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

app.use("/uploads", express.static("./uploads"));

app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

// require('./src/helpers/sync')()
