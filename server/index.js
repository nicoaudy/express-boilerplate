"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.disable("x-powered-by");

app.use("/", [
  require("./routes/auth.routes"),
  require("./routes/user.routes")
]);

app.use(require("./middleware/error_middleware").all);

module.exports = app;
