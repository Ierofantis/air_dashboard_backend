
module.exports = (sequelize, Sequelize) => {
  const ranking = sequelize.define("ranking", {
    name: {
      type: Sequelize.STRING
    },
    ranking: {
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

  return ranking;
};
