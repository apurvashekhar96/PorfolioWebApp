const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 12;

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const pass = req.body.password;
  bcrypt.hash(pass, saltRounds).then((hash) => {
    if (!hash) {
      //return res.send("Some Error occured");
      const error = new Error("Server Problem: storing related issue.");
      error.statusCode = 422;
      error.data = "Bcrypt Hash related error";
      throw error;
    }
    const user = new User({
      email: email,
      password: hash,
    });
    user.save();
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const pass = req.body.password;
  let loadedUser;
  User.findOne({ email: email })
    .then((result) => {
      if (!result) {
        console.log("some server error");
        const error = Error("You are Not a Valid User.");
        error.statusCode = 401;
        throw error;
      }
      loadedUser = result;
      return bcrypt.compare(pass, loadedUser.password);
    })
    .then((doMatch) => {
      if (!doMatch) {
        console.log("Some bcrypt error");
        const error = new Error("Wrong Password Entered by the User");
        error.statusCode = 401;
        throw error;
      } else {
        const token = jwt.sign(
          { user: loadedUser, userid: loadedUser._id.toString() },
          "averysecretkey",
          { expiresIn: 600 }
        );
        console.log("matched");
        res.status(200).send({ user: loadedUser.email, token: token });
      }
    })
    .catch((err) => {
      console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
