"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var db = require("../models");

var TaskvalidationSchema = require("../middleware/validator/task.validator");

var task = db.task;
var project = db.projects;
var statuts = db.statuts;
var user = db.users;

exports.findAll = function (req, res) {
  task.findAll({
    include: [{
      model: project
    }, {
      model: statuts
    }, {
      model: user
    }]
  }).then(function (data) {
    res.send(data).status(200);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "an error occur"
    });
  });
};

exports.create = function (req, res) {
  var validation = TaskvalidationSchema.validate(req.body);

  if (validation.error) {
    return res.status(400).send({
      error: validation.error
    });
  }

  var body = req.body;

  var taskdata = _objectSpread({}, body);

  task.create(taskdata).then(function (data) {
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

  task.update(body, {
    where: {
      id: id
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: "task was updated successfully."
      });
    } else {
      res.send({
        message: "Cannot update task with id=".concat(id, ". Maybe User was not found or req.body is empty!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: "Error updating task with id=" + id,
      error: err.message
    });
  });
};

exports.findById = function (req, res) {
  var id = req.params.id;
  task.findAll({
    include: [{
      model: project
    }, {
      model: statuts
    }, {
      model: user
    }, {
      model: task
    }],
    where: {
      id: id
    }
  }).then(function (taskdata) {
    if (!taskdata) {
      return res.status(404).send({
        message: "task not found with id ".concat(req.params.id)
      });
    }

    res.send(taskdata).status(200);
  })["catch"](function (err) {
    res.status(500).send({
      message: "Error retrieving taskdata with id=" + id
    });
  });
};

exports["delete"] = function (req, res) {
  var id = req.params.id;
  task.destroy({
    where: {
      id: id
    }
  }).then(function (count) {
    if (!count) {
      return res.status(404).send({
        error: 'No user'
      });
    } else res.send({
      message: "".concat(count, " task were deleted successfully!")
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing User."
    });
  });
};