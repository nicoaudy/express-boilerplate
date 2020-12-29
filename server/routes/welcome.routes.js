"use strict";

const router = require("express").Router();
const { index } = require("../controllers/welcome.controller");

router.route("/").get(index);

module.exports = router;
