module.exports = (sequelize, Sequelize) => {
    const projects = sequelize.define("projects", {
      start_date:{type: Sequelize.DATE, allowNull:false, default:Date.now()},
      end_date:{type: Sequelize.DATE, allowNull:false},
      description:{ type: Sequelize.STRING, allowNull: false},
      title:{ type: Sequelize.STRING, allowNull: false, unique: true}

    });
    return projects;
  };
