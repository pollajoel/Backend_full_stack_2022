module.exports = (sequelize, Sequelize) => {
    
    const task = sequelize.define("task", {
      name: { type: Sequelize.STRING, allowNull: false, unique: true},
      description: { type: Sequelize.STRING, allowNull: false, default: false },
      start_date :{type: Sequelize.DATE, allowNull:false, default:Date.now()},
      end_date :{type: Sequelize.DATE, allowNull:false}
    });
    return task;
  };