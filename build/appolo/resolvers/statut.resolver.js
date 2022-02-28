"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var db = require("../../models");

var Statuts = db.statuts;
module.exports = {
  Query: {
    statuts: function () {
      var _statuts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, args, context, info) {
        var userId, statut;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = context.userId;
                _context.next = 3;
                return Statuts.findAll({});

              case 3:
                statut = _context.sent;
                return _context.abrupt("return", statut);

              case 5:
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
      var _statut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, args) {
        var statut;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Statuts.findAll({
                  where: {
                    id: args.id
                  }
                });

              case 2:
                statut = _context2.sent;
                return _context2.abrupt("return", statut);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function statut(_x5, _x6) {
        return _statut.apply(this, arguments);
      }

      return statut;
    }() //mutations // typer dans schema
    //createProduct
    // updateProduct
    // etc...

  }
};