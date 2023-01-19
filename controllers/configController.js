const configdata = require("../models/configdata");

exports.getConfigData = (req, res, next) => {
  configdata
    .find()
    .then((result) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
