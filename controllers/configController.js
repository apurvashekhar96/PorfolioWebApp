const configdata = require("../models/configdata");

exports.getConfigData = (req, res, next) => {
  configdata
    .find()
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
