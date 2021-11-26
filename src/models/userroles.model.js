module.exports = (sequelize, Sequelize) => {
  const userroles = sequelize.define("userroles", {
    rolename: { type: Sequelize.STRING, allowNull: false, unique: true}
  });
  return userroles;
};
