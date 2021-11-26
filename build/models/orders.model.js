module.exports = (sequelize, Sequelize) => {
    const orders = sequelize.define("orders", {
      title: { type: Sequelize.STRING, allowNull: false, unique:true},
      DepartDate: { type: Sequelize.DATE, allowNull:false},
      price :{ type: Sequelize.NUMBER, allowNull:false},
      carriageNumber: { type: Sequelize.NUMBER, allowNull:false, default:2}
    });
    return orders;
  };
