"use strict";

module.exports = function (sequelize, Sequelize) {
  var picture = sequelize.define("picture", {
    picturetitle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
  return picture;
};