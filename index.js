const express = require("express");
const app = express();
app.listen(3000);

const db = require("./db");
const auth = require("./auth.js");

// Online
app.get("/", auth, (req, res) => {
    if (!req.user) return res.status(401).send("🔴");
});

// User
app.get("/:user", (req, res) => {
    
});

// 404
app.use((req, res) => res.status(404).send("🔴"));