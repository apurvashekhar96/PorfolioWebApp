const express = require("express");
const userControllers = require("../controllers/handleUserControllers");

const router = express.Router();

router.post("/signup", userControllers.postSignup);
router.post("/login", userControllers.postLogin);

module.exports = router;
