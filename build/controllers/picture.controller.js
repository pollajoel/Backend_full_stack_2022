"use strict";

var db = require("../models");

var picture = db.picture; //const Op = db.Sequelize.Op;

exports.findAll = function (req, res) {
  picture.findAll({}).then(function (data) {
    res.send(data).status(200);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "an error occur"
    });
  });
};