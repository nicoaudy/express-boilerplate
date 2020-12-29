"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.disable("x-powered-by");

app.use("/", [
	require("./routes/welcome.routes"),
	require("./routes/auth.routes"),
	require("./routes/user.routes"),
]);

app.use(require("./middleware/error_middleware").all);

module.exports = app;
