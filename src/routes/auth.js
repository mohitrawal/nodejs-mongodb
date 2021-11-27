const express = require('express');
const router = express.Router();
const userValidation = require('../utils/validation/userValidation');
const AuthController = require("../controllers/auth");

router.post("/signup", userValidation.validate('signup'), AuthController.signup);
router.post("/login", userValidation.validate('login'), AuthController.login);

module.exports = router;