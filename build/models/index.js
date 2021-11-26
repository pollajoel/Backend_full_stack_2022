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
db.sequelize = sequelize;
db.timerange = require("./timerange.model")(sequelize, Sequelize);
db.picture = require("./picture.model")(sequelize, Sequelize);

db.userroles = require("./userroles.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);
db.users.hasOne(db.userroles, {as: "roles"});
db.users.hasOne(db.picture, {as : "user_picture"});

db.orders = require("./orders.model")(sequelize, Sequelize);
db.users.hasMany(db.orders, {as : "orders"});
db.orders.belongsTo(db.users,{
  foreignKey : "orderId",
  as: "users"
})

db.rise = require("./rise.model")(sequelize, Sequelize);
db.rise.hasMany(db.timerange, {as: "timerange"});
db.timerange.belongsTo(db.rise, {
  foreignKey : "timerangeId",
  as : "timerange"
});
db.rise.hasMany(db.picture, {as: "rise_picture"});
db.picture.belongsTo(db.rise,{
    foreignKey : "timerangeId",
    as : "timerange"} 
  );






module.exports = db;