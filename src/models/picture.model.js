module.exports = (sequelize, Sequelize) => {
    const picture = sequelize.define("picture", {
      picturetitle: { type: Sequelize.STRING, allowNull: false},
      description :{ type: Sequelize.STRING, allowNull:true}
     
    });
    return picture;
  };
  