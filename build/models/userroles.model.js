"use strict";

module.exports = function (sequelize, Sequelize) {
  var userroles = sequelize.define("userroles", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  });
  return userroles;
};