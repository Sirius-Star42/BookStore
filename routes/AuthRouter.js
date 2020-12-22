const express = require("express");
const router = express.Router();
const AuthorController = require("../controllers/Authcontroller")



router.post("/register", AuthorController.authRegister);

router.post("/login", AuthorController.authLogin);

module.exports = router;