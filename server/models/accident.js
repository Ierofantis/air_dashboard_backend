
module.exports = (sequelize, Sequelize) => {
  const accident = sequelize.define("accident", {
    name: {
      type: Sequelize.STRING
    },
    accidents: {
      type: Sequelize.INTEGER
    },
    airlineId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'airlines',
        key: 'id'
      },
    },
  });

  return accident;
};
