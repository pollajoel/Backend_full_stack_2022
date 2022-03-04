"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var jwTkeys = require("../config/configdata");

var APP_SECRET = jwTkeys.JwtConfig.keys;

function getTokenPayload(token) {
  return _jsonwebtoken["default"].verify(token, APP_SECRET);
}

function getUserId(req, authToken) {
  if (req) {
    var authHeader = req.headers.authorization;

    if (authHeader) {
      var token = authHeader.replace('Bearer ', '');

      if (!token) {
        throw new Error('No token found');
      }

      var _getTokenPayload = getTokenPayload(token),
          id = _getTokenPayload.id;

      return id;
    }
  } else if (authToken) {
    var _getTokenPayload2 = getTokenPayload(authToken),
        _id = _getTokenPayload2.id;

    return _id;
  }

  throw new Error('Not authenticated');
}

module.exports = {
  APP_SECRET: APP_SECRET,
  getUserId: getUserId
};