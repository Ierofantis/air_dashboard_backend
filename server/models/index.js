const dbConfig = require("../config/keys");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.pgDatabase, dbConfig.pgUser, dbConfig.pgPassword, {
  host: dbConfig.PGHOST,
  dialect: "postgres",
  port: dbConfig.pgPort,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.airline = require("./airline.js")(sequelize, Sequelize);
db.accident = require("./accident.js")(sequelize, Sequelize);
db.bankcrupt = require("./bankcrupt.js")(sequelize, Sequelize);

module.exports = db;