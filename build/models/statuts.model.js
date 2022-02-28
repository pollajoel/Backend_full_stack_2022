"use strict";

module.exports = function (sequelize, Sequelize) {
  var statuts = sequelize.define("statuts", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return statuts;
};