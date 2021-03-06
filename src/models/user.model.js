module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {
      name: { type: Sequelize.STRING, allowNull: false},
      firstname: { type: Sequelize.STRING, allowNull: false},
      password: { type: Sequelize.STRING, allowNull: false},
      is_admin: { type: Sequelize.BOOLEAN, allowNull: false, default: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true},
      phone: { type: Sequelize.STRING, allowNull: true, default:""},
      postal_code: { type: Sequelize.STRING, allowNull: true, default:"" },
      city: { type: Sequelize.STRING, allowNull: true, default:"" },
      country: { type: Sequelize.STRING, allowNull: true, default:"" },
      profil_image: { type: Sequelize.STRING, allowNull: true},
    });
    return users;
  };
