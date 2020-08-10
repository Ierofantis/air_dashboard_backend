
module.exports = (sequelize, Sequelize) => {
  const airline = sequelize.define("airline", {
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    contact: {
      type: Sequelize.STRING
    },
    ranking: {
      type: Sequelize.INTEGER
    },
    isBankcrupt: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
  });

  return airline;
};
