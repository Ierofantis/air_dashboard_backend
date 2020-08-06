const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt-nodejs");

exports.registerUser = async (email, username, password, res) => {
  try {
    let user = await User.count({ where: { email: email } });
    if (user === 0) {
      User.create({
        username: username,
        password: bcrypt.hashSync(password),
        email: email
      })
      const token = User.generateAuthToken();

      res.header("x-auth-token", token).send({
        name: username,
        email: email,
        token: token
      });
    } else {
      res.status(400).send({ success: false, msg: 'User already registered.' });
    }
  } catch (e) {
    console.log(e)
  }
}

exports.loginUser = async (email, password, res) => {
  let user = await User.findOne({ where: { email: email } });
  let crypt = bcrypt.compareSync(password, user.password);
  if (crypt && user.dataValues.username !== null) {
    const token = User.generateAuthToken();
    res.header("x-auth-token", token).send({
      token: token
    });
  }
  else {
    res.status(401).send({ success: false, msg: 'Authentication failed' });
  }
}
