const config = { "myprivatekey": "myprivatekey" }
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt-nodejs');

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

  //custom method to generate authToken 
  user.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, "myprivatekey"); //get the private key from the config file -> environment variable
    return token;
  }

  user.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };

  //function to validate user 
  function validateUser(user) {
    const schema = {
      username: Joi.string().min(3).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(3).max(255).required()
    };

    return Joi.validate(user, schema);
  }
  return user;
};
