"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('apollo-server-express'),
    AuthenticationError = _require.AuthenticationError;

module.exports = {
  Query: {
    statuts: function () {
      var _statuts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, args, context, info) {
        var userId, Statuts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = context.userId;
                Statuts = context.models.statuts;

                if (userId) {
                  _context.next = 4;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 4:
                _context.next = 6;
                return Statuts.findAll({});

              case 6:
                return _context.abrupt("return", _context.sent);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function statuts(_x, _x2, _x3, _x4) {
        return _statuts.apply(this, arguments);
      }

      return statuts;
    }(),
    statut: function () {
      var _statut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, args, context) {
        var userId, Statuts;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userId = context.userId;
                Statuts = context.models.statuts;

                if (userId) {
                  _context2.next = 4;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 4:
                _context2.next = 6;
                return Statuts.findAll({
                  where: {
                    id: args.id
                  }
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

      function statut(_x5, _x6, _x7) {
        return _statut.apply(this, arguments);
      }

      return statut;
    }()
  },
  Mutation: {
    createStatut: function () {
      var _createStatut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, args, context) {
        var Statuts, userId;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Statuts = context.models.statuts;
                userId = context.userId;

                if (userId) {
                  _context3.next = 4;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 4:
                _context3.prev = 4;
                _context3.next = 7;
                return Statuts.create({
                  name: args.name,
                  description: args.description
                });

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

      function createStatut(_x8, _x9, _x10) {
        return _createStatut.apply(this, arguments);
      }

      return createStatut;
    }(),
    updateStatut: function () {
      var _updateStatut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parent, args, context) {
        var userId, Statuts;
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
                Statuts = context.models.statuts;
                _context4.prev = 4;
                _context4.next = 7;
                return Statuts.update(args.input, {
                  where: {
                    id: args.id
                  }
                });

              case 7:
                _context4.next = 9;
                return Statuts.findOne({
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

      function updateStatut(_x11, _x12, _x13) {
        return _updateStatut.apply(this, arguments);
      }

      return updateStatut;
    }(),
    deleteStatut: function () {
      var _deleteStatut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(parent, args, context) {
        var userId, Statuts;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                userId = context.userId;
                Statuts = context.models.statuts;

                if (userId) {
                  _context5.next = 4;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return Statuts.destroy({
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

      function deleteStatut(_x14, _x15, _x16) {
        return _deleteStatut.apply(this, arguments);
      }

      return deleteStatut;
    }()
  }
};