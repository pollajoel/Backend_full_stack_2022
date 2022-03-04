module.exports = (sequelize, Sequelize) => {
  const userroles = sequelize.define("userroles", {
    name: { type: Sequelize.STRING, allowNull: false, unique: true}
  });
  return userroles;
};
