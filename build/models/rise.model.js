module.exports = (sequelize, Sequelize) => {
    
    const rise = sequelize.define("rise", {
      title: { type: Sequelize.STRING, allowNull: false},
      price: { type: Sequelize.STRING, allowNull: false},
      description: { type: Sequelize.BOOLEAN, allowNull: false, default: false }
    });
  
    return rise;
  };