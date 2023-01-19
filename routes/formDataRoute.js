const express = require("express");
const formDataControllers = require("../controllers/formDataController");

const router = express.Router();

router.post("/formData", formDataControllers.postFormData);

module.exports = router;
