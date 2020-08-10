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

//airline to accidents
db.airline.hasMany(db.accident, { as: "accidents" });

//accidents
db.accident.belongsTo(db.airline, {
  foreignKey: "airlineId",
  as: "airline"
});

module.exports = db;