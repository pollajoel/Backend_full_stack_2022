"use strict";

module.exports = function (sequelize, Sequelize) {
  var projects = sequelize.define("projects", {
    start_date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      "default": Date.now()
    },
    end_date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  });
  return projects;
};