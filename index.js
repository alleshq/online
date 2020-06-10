const express = require("express");
const app = express();
app.listen(3000);

const db = require("./db");
const auth = require("./auth.js");

app.get("/", auth, (req, res) => {
    if (!req.user) return res.status(401).send("🔴");
});