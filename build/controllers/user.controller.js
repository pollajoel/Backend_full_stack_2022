"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var db = require("../models");

var bcrypt = require('bcrypt');

var User = db.users;
var role = db.userroles;

var jwt = require("jsonwebtoken");

var jwTkeys = require("../config/configdata");

var UservalidationSchema = require("../middleware/validator/user.validator");

exports.findAll = function (req, res) {
  User.findAll({
    include: [{
      model: role
    }]
  }).then(function (data) {
    res.send(data).status(200);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "an error occur"
    });
  });
};

exports.register = function (req, res) {
  var validation = UservalidationSchema.validate(req.body);

  if (validation.error) {
    return res.status(400).send({
      error: validation.error
    });
  }

  var hashedPassword = bcrypt.hashSync(req.body.password, 10);
  var body = req.body;

  var UserData = _objectSpread(_objectSpread({}, body), {}, {
    password: hashedPassword
  });

  User.create(UserData).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "an error occur"
    });
  });
};

exports.update = function (req, res) {
  var id = req.params.id;
  var newPassword = bcrypt.hashSync(req.body.password, 10);

  var body = _objectSpread(_objectSpread({}, req.body), {}, {
    password: newPassword
  });

  User.update(body, {
    where: {
      id: id
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: "User was updated successfully."
      });
    } else {
      res.send({
        message: "Cannot update User with id=".concat(id, ". Maybe User was not found or req.body is empty!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: "Error updating User with id=" + id,
      error: err.message
    });
  });
};

exports.findById = function (req, res) {
  var id = req.params.id;
  User.findAll({
    include: [{
      model: role
    }],
    where: {
      id: id
    }
  }).then(function (user) {
    if (!user) {
      return res.status(404).send({
        message: "user not found",
        connect: false
      });
    }

    res.send(user).status(200);
  })["catch"](function (err) {
    res.status(500).send({
      message: "Error retrieving User with id=" + id
    });
  });
};

exports["delete"] = function (req, res) {
  var id = req.params.id;
  User.destroy({
    where: {
      id: id
    }
  }).then(function (count) {
    if (!count) {
      return res.status(404).send({
        error: 'No user'
      });
    } else res.send({
      message: "".concat(count, " User were deleted successfully!")
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing User."
    });
  });
};

exports.authentification = function (req, res) {
  var body = req.body;
  var hashedPassword = bcrypt.hashSync(req.body.password, 10);

  var data = _objectSpread(_objectSpread({}, body), {}, {
    password: hashedPassword
  });

  User.findOne({
    where: {
      email: data.email
    }
  }).then(function (user) {
    var userdata = JSON.stringify(user);

    if (!userdata) {
      return res.status(404).send({
        error: 'No user Found..',
        login: false
      });
    } else {
      var decodJson = JSON.parse(userdata);
      var userToken = jwt.sign({
        id: decodJson.id,
        is_admin: decodJson.is_admin
      }, jwTkeys.JwtConfig.keys, {
        expiresIn: 86400
      });
      return res.send({
        jwtWebToken: userToken
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred during User Logging..."
    });
  });
};