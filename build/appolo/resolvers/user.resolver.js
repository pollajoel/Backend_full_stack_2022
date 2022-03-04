"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('apollo-server-express'),
    AuthenticationError = _require.AuthenticationError;

var bcrypt = require('bcrypt');

var jwTkeys = require("../../config/configdata");

var APP_SECRET = jwTkeys.JwtConfig.keys;

var jwt = require("jsonwebtoken");

module.exports = {
  Query: {
    users: function () {
      var _users = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, args, context, info) {
        var userId, User;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = context.userId;
                User = context.models.users;

                if (userId) {
                  _context.next = 4;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 4:
                _context.next = 6;
                return User.findAll({
                  include: [{
                    model: context.models.userroles
                  }]
                });

              case 6:
                return _context.abrupt("return", _context.sent);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function users(_x, _x2, _x3, _x4) {
        return _users.apply(this, arguments);
      }

      return users;
    }(),
    user: function () {
      var _user = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, args, context) {
        var userId, User;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userId = context.userId;
                User = context.models.users;

                if (userId) {
                  _context2.next = 4;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 4:
                _context2.next = 6;
                return User.findOne({
                  where: {
                    id: args.id
                  },
                  include: [{
                    model: context.models.userroles
                  }]
                });

              case 6:
                return _context2.abrupt("return", _context2.sent);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function user(_x5, _x6, _x7) {
        return _user.apply(this, arguments);
      }

      return user;
    }()
  },
  Mutation: {
    createUser: function () {
      var _createUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, args, context) {
        var User, userId;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                User = context.models.users;
                userId = context.userId;

                if (userId) {
                  _context3.next = 4;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 4:
                _context3.prev = 4;
                _context3.next = 7;
                return User.create(args.input);

              case 7:
                return _context3.abrupt("return", _context3.sent);

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](4);
                throw new Error(_context3.t0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[4, 10]]);
      }));

      function createUser(_x8, _x9, _x10) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }(),
    updateUser: function () {
      var _updateUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parent, args, context) {
        var userId, User;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userId = context.userId;

                if (userId) {
                  _context4.next = 3;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 3:
                User = context.models.users;
                _context4.prev = 4;
                _context4.next = 7;
                return User.update(args.input, {
                  where: {
                    id: args.id
                  }
                });

              case 7:
                _context4.next = 9;
                return User.findOne({
                  where: {
                    id: args.id
                  }
                });

              case 9:
                return _context4.abrupt("return", _context4.sent);

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](4);
                throw new Error(_context4.t0);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 12]]);
      }));

      function updateUser(_x11, _x12, _x13) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }(),
    deleteUser: function () {
      var _deleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(parent, args, context) {
        var userId, User;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                userId = context.userId;
                User = context.models.users;

                if (userId) {
                  _context5.next = 4;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return User.destroy({
                  where: {
                    id: args.id
                  }
                });

              case 7:
                return _context5.abrupt("return", _context5.sent);

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](4);
                throw new Error(_context5.t0);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 10]]);
      }));

      function deleteUser(_x14, _x15, _x16) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }(),
    authentification: function () {
      var _authentification = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_, _ref, context) {
        var email, password, userModel, user, hashedPassword, isValid, token;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                email = _ref.email, password = _ref.password;
                userModel = context.models.users;
                _context6.next = 4;
                return userModel.findOne({
                  where: {
                    email: email
                  }
                });

              case 4:
                user = _context6.sent;

                if (user) {
                  _context6.next = 7;
                  break;
                }

                throw new Error('No user with that email');

              case 7:
                hashedPassword = bcrypt.hashSync(password, 10);
                isValid = bcrypt.compareSync(password, hashedPassword);

                if (isValid) {
                  _context6.next = 11;
                  break;
                }

                throw new Error('Wrong Password');

              case 11:
                token = jwt.sign({
                  id: user.id,
                  is_admin: user.is_admin
                }, APP_SECRET, {
                  expiresIn: 86400
                });
                return _context6.abrupt("return", {
                  token: token,
                  user: user
                });

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function authentification(_x17, _x18, _x19) {
        return _authentification.apply(this, arguments);
      }

      return authentification;
    }()
  }
};