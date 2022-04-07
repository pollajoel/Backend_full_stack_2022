const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

/* connexion with mysql database */

const sequelize = new Sequelize({
    operatorsAliases: 0,
    database:  process.env.DB_SCHEMA || 'planning_db',
    username:  process.env.DB_USER || 'postgres',
    password:  process.env.DB_PASSWORD || 'admin',
        host:  process.env.DB_HOST|| 'pgsql://postgres:admin@127.0.0.1:5432/planning_db?serverVersion=13&charset=utf8',
        port:  process.env.DB_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: 
    {
      ssl: process.env.DB_SSL == "true"
    }

  });


/*
const sequelize = new Sequelize("sqlite::memory:",{
 logging: console.log
});
*/

const db = {};
db.sequelize = sequelize;
db.projects = require("./projects.model")(sequelize, Sequelize);
db.statuts = require("./statuts.model")(sequelize, Sequelize);
db.task = require("./task.model")(sequelize, Sequelize);
db.picture = require("./picture.model")(sequelize, Sequelize);
db.userroles = require("./userroles.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);

//user -- role
db.userroles.hasMany(db.users);
db.users.belongsTo(db.userroles);

// Project -- user 
db.users.hasMany(db.projects);
db.projects.belongsTo(db.users);

// project -- statuts 
db.statuts.hasMany(db.projects);
db.projects.belongsTo(db.statuts);

// project -- task
db.projects.hasMany(db.task);
db.task.belongsTo(db.projects);

// user -- task
db.users.hasMany(db.task);
db.task.belongsTo(db.users);

// task -- statuts
db.statuts.hasMany( db.task );
db.task.belongsTo(db.statuts );




module.exports = db;