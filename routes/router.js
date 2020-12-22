const express = require("express");
const router = express.Router();
const AuthRouter = require("./AuthRouter");







router.use("/auth", AuthRouter);








module.exports = router;