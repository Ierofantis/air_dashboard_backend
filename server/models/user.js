const jwt = require('jsonwebtoken');

module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define('user', {
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  });

  user.generateAuthToken = function () {
    const token = jwt.sign({ foo: 'bar' }, "myprivatekey");
    return token;
  }

  return user;
};
