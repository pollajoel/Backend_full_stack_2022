module.exports = (sequelize, Sequelize) => {
    const timerange = sequelize.define("timerange", {
      departTime: { type: Sequelize.STRING, allowNull: false},
      arriveTime: { type: Sequelize.STRING, allowNull: false},
    });
    return timerange;
  };
