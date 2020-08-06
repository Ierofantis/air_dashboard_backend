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
        _id: user._id,
        name: user.name,
        email: user.email,
        token: token
      });


      //res.status(200).send({ success: true, msg: 'User registered.' });
    } else {
      res.status(400).send({ success: false, msg: 'User already registered.' });
    }
  } catch (e) {
    console.log(e)
  }
}
