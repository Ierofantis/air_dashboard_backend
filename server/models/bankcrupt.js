module.exports = (sequelize, Sequelize) => {
  const bankcrupts = sequelize.define("bankcrupts", {
    bankcrupts: {
      type: Sequelize.BOOLEAN
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

  return bankcrupts;
};