"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require("express");

var app = express();

var bodyParser = require('body-parser');

var cors = require('cors');

var apiRouter = require("../routes");

var PORT = process.env.PORT || 4000;

var swaggerUi = require("swagger-ui-express");

var swaggerDocument = require("../swagger/swaggerDocument.json");

var db = require("../models");

var basicAuth = require('express-basic-auth');

var _require = require('apollo-server-express'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

var resolvers = require("../appolo/resolvers");

var schema = require('../appolo/schema');

var _require2 = require("../middleware/auth.security"),
    getUserId = _require2.getUserId;

var graphQlServer = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers: resolvers,
  context: function context(_ref) {
    var req = _ref.req;
    return _objectSpread(_objectSpread({}, req), {}, {
      userId: req && req.headers.authorization ? getUserId(req) : null
    });
  }
});
graphQlServer.start().then(function (res) {
  graphQlServer.applyMiddleware({
    app: app,
    path: "/graphql"
  });
}); // sequelize configuration

db.sequelize.sync(); // In development, you may need to drop existing tables and re-sync database.

db.sequelize.sync({
  force: true
}).then(function () {
  console.log("Drop and re-sync db.");
});
app.use("/api-docs", basicAuth({
  users: {
    'AttelageUser': '23c33a52-22b8-11ec-9621-0242ac130002'
  },
  challenge: true
}), swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', apiRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports.start = function () {
  app.listen(PORT, function (err) {
    console.warn("Serveur Listen on port ".concat(PORT));
  });
};