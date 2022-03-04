module.exports = (sequelize, Sequelize) => {
    const statuts = sequelize.define("statuts", {
      name: { type: Sequelize.STRING, allowNull: false, unique:true},
      description: { type: Sequelize.STRING, allowNull: false}
    });
    return statuts;
  };
