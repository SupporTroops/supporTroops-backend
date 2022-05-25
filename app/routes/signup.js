const express = require("express");
const joi = require("joi");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", async (req, res) => {
    console.log(req.body);
    res.send("Success");
});

module.exports = router;
