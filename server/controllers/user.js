const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

/* Register Users */
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

/* Login Users */
exports.loginUser = async (email, password, res) => {
  try {
    let user = await User.findOne({ where: { email: email } });
    let crypt = await bcrypt.compareSync(password, user.password);
    if (crypt && user.dataValues.username !== null) {
      const token = await User.generateAuthToken();
      res.header("x-auth-token", token).send({
        token: token
      });
    }
    else {
      res.status(401).send({ success: false, msg: 'Authentication failed' });
    }
  }
  catch (e) {
    console.log(e)
  }
}

/* Authorize Routes */
exports.authorizeRoutes = async (email, password, res) => {
  try {
    let user = await User.findOne({ where: { email: email } });
    const token = await jwt.verify(password, "myprivatekey")
    if (token.foo === "bar" && user.dataValues.username !== null) {
      res.status(200).send({ success: true, msg: 'Authorization completed' });
    }
    else {
      res.status(401).send({ success: false, msg: 'Authorization failed' });
    }
  }
  catch (e) {
    console.log(e)
  }
}
