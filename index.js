const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.listen(3000);

const db = require("./db");
const auth = require("./auth.js");

const {Op} = require("sequelize");
const uuid = require("uuid").v4;

// Online
app.get("/", auth, async (req, res) => {
    // User auth
    if (!req.user) return res.status(401).send("🔴");

    // Don't add ping if already pinged recently, and return success
    const recent = await db.Ping.count({
        where: {
            user: req.user,
            createdAt: {
                [Op.gte]: new Date().getTime() - 1000 * 30
            }
        }
    });
    if (recent > 0) return res.send("🔵");

    // Add ping
    await db.Ping.create({
        id: uuid(),
        user: req.user
    });

    // Return success
    res.send("🔵");
});

// User
app.get("/:user", async (req, res) => {
    const recent = await db.Ping.count({
        where: {
            user: req.params.user,
            createdAt: {
                [Op.gte]: new Date().getTime() - 1000 * 60
            }
        }
    });
    res.send(recent > 0 ? "🟢" : "⚫");
});

// 404
app.use((req, res) => res.status(404).send("🔴"));