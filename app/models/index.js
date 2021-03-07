const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const dbmodel = {};
dbmodel.Sequelize = Sequelize;
dbmodel.sequelize = sequelize;

dbmodel.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
dbmodel.userLog = require("./User_log.model.js")(sequelize, Sequelize);
//d.users = require("./")

module.exports = dbmodel;
