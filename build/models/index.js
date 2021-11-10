const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
/* connexion with mysql database 

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
*/

/* connexion with sqlite database */
const sequelize = new Sequelize("sqlite::memory:",{
 logging: console.log
});



const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.model")(sequelize, Sequelize);
db.rise = require("./rise.model")(sequelize, Sequelize);
module.exports = db;