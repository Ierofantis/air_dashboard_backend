
module.exports = (sequelize, Sequelize) => {
  const accident = sequelize.define("accident", {
    accidents: {
      type: Sequelize.STRING
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
