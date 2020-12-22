const express = require("express");

const router = express.Router();






router.get("/", (req, res) => {
    console.log("API Page")
    res.send("API Page")
});













module.exports = router;