"use strict";

module.exports = function (sequelize, Sequelize) {
  var task = sequelize.define("task", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      "default": false
    },
    start_date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      "default": Date.now()
    },
    end_date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      "default": Date.now()
    },
    projectId: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  });
  return task;
};