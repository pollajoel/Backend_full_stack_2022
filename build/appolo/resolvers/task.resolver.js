"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('apollo-server-express'),
    AuthenticationError = _require.AuthenticationError;

module.exports = {
  Query: {
    projectsTaks: function () {
      var _projectsTaks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref, context, info) {
        var projectId, userId, tasks;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                projectId = _ref.projectId;
                userId = context.userId;
                tasks = context.models.task;

                if (!userId) {//throw new AuthenticationError('You must login to add Statuts');
                }

                _context.next = 6;
                return tasks.findAll({
                  include: [{
                    model: context.models.statuts
                  }, {
                    model: context.models.users
                  }],
                  where: {
                    projectId: projectId
                  }
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

      function projectsTaks(_x, _x2, _x3, _x4) {
        return _projectsTaks.apply(this, arguments);
      }

      return projectsTaks;
    }(),
    tasks: function () {
      var _tasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, args, context, info) {
        var userId, tasks;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userId = context.userId;
                tasks = context.models.task;
                /*if (!userId) {
                    throw new AuthenticationError('You must login to add Statuts');
                }
                */

                _context2.next = 4;
                return tasks.findAll({
                  include: [{
                    model: context.models.projects
                  }, {
                    model: context.models.statuts
                  }, {
                    model: context.models.users
                  }]
                });

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function tasks(_x5, _x6, _x7, _x8) {
        return _tasks.apply(this, arguments);
      }

      return tasks;
    }(),
    task: function () {
      var _task = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, args, context) {
        var userId, tasks;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userId = context.userId;
                tasks = context.models.task;

                if (userId) {
                  _context3.next = 4;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 4:
                _context3.next = 6;
                return tasks.findOne({
                  where: {
                    id: args.id
                  },
                  include: [{
                    model: context.models.projects
                  }, {
                    model: context.models.statuts
                  }, {
                    model: context.models.users
                  }]
                });

              case 6:
                return _context3.abrupt("return", _context3.sent);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function task(_x9, _x10, _x11) {
        return _task.apply(this, arguments);
      }

      return task;
    }()
  },
  Mutation: {
    createtask: function () {
      var _createtask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parent, args, context) {
        var task, userId;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                task = context.models.task;
                userId = context.userId;

                if (userId) {
                  _context4.next = 4;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 4:
                _context4.prev = 4;
                _context4.next = 7;
                return task.create(args.taskInput);

              case 7:
                return _context4.abrupt("return", _context4.sent);

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](4);
                throw new Error(_context4.t0);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 10]]);
      }));

      function createtask(_x12, _x13, _x14) {
        return _createtask.apply(this, arguments);
      }

      return createtask;
    }(),
    updatetask: function () {
      var _updatetask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(parent, args, context) {
        var userId, tasksModel;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                userId = context.userId;

                if (userId) {
                  _context5.next = 3;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 3:
                tasksModel = context.models.task;
                _context5.prev = 4;
                _context5.next = 7;
                return tasksModel.update(args.updatetaskInput, {
                  where: {
                    id: args.id
                  }
                });

              case 7:
                _context5.next = 9;
                return tasksModel.findOne({
                  where: {
                    id: args.id
                  }
                });

              case 9:
                return _context5.abrupt("return", _context5.sent);

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                throw new Error(_context5.t0);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 12]]);
      }));

      function updatetask(_x15, _x16, _x17) {
        return _updatetask.apply(this, arguments);
      }

      return updatetask;
    }(),
    deletetask: function () {
      var _deletetask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(parent, args, context) {
        var userId, Tasks;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                userId = context.userId;
                Tasks = context.models.task;

                if (userId) {
                  _context6.next = 4;
                  break;
                }

                throw new AuthenticationError('You must login to add Statuts');

              case 4:
                _context6.prev = 4;
                _context6.next = 7;
                return Tasks.destroy({
                  where: {
                    id: args.id
                  }
                });

              case 7:
                return _context6.abrupt("return", _context6.sent);

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](4);
                throw new Error(_context6.t0);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[4, 10]]);
      }));

      function deletetask(_x18, _x19, _x20) {
        return _deletetask.apply(this, arguments);
      }

      return deletetask;
    }()
  }
};