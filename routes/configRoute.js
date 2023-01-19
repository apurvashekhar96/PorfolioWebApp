const express = require("express");
const path = require("path");
const configDataControllers = require("../controllers/configController");

const router = express.Router();

router.get("/configLinks", configDataControllers.getConfigData);

module.exports = router;
