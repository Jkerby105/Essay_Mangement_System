const { json } = require("body-parser");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.postCreateAccount = async (req, res, next) => {
  const saltRounds = 10;
  const someOtherPlainTextPassword = process.env.SecretPassword;

  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const user = new User({
        userName: userName,
        email: email,
        password: hash,
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).json({ message: "User created!" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  User.find({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("A user with this email could not be found.");
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user[0];
      return bcrypt.compare(password, user[0].password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong password!");
        error.statusCode = 401;
        throw error;
      }

      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString(),
        },
        process.env.SecretPassword,
        { expiresIn: "1h" }
      );
      res.status(200).json({ token: token, userId: loadedUser._id.toString() });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
