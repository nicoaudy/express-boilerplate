"use strict";

const index = (req, res, next) => {
	res.render("welcome");
};

module.exports = {
	index,
};
