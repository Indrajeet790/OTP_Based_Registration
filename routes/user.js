const express = require("express");
const router = express.Router();
const userController = require("../controllers/userContoller");

router.post("/register", userController.registerUser);
router.post("/sendOtp", userController.sendOtp);

module.exports = router;