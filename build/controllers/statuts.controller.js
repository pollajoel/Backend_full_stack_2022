"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var db = require("../models");

var Statuts = db.statuts;

var StatutsvalidationSchema = require("../middleware/validator/statuts.validator");

exports.findAll = function (req, res) {
  Statuts.findAll({}).then(function (data) {
    res.send(data).status(200);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "an error occur"
    });
  });
};

exports.create = function (req, res) {
  var validation = StatutsvalidationSchema.validate(req.body);

  if (validation.error) {
    return res.status(400).send({
      error: validation.error
    });
  }

  var body = req.body;

  var Statutsdata = _objectSpread({}, body);

  Statuts.create(Statutsdata).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "an error occur"
    });
  });
};

exports.update = function (req, res) {
  var id = req.params.id;

  var body = _objectSpread({}, req.body);

  Statuts.update(body, {
    where: {
      id: id
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: "Statuts was updated successfully."
      });
    } else {
      res.send({
        message: "Cannot update Statuts with id=".concat(id, ". Maybe User was not found or req.body is empty!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: "Error updating Statuts with id=" + id,
      error: err.message
    });
  });
};

exports.findById = function (req, res) {
  var id = req.params.id;
  Statuts.findAll({
    where: {
      id: id
    }
  }).then(function (Statuts) {
    if (!Statuts) {
      return res.status(404).send({
        message: "Statuts not found with id ".concat(req.params.id)
      });
    }

    res.send(Statuts).status(200);
  })["catch"](function (err) {
    res.status(500).send({
      message: "Error retrieving Statuts with id=" + id
    });
  });
};

exports["delete"] = function (req, res) {
  var id = req.params.id;
  Statuts.destroy({
    where: {
      id: id
    }
  }).then(function (count) {
    if (!count) {
      return res.status(404).send({
        error: 'No user'
      });
    } else res.send({
      message: "".concat(count, " Statuts were deleted successfully!")
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing User."
    });
  });
};