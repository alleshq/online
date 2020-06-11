const axios = require("axios");

module.exports = async (req, res, next) => {
    try {
        req.user = (await axios.get(
            `https://1api.alles.cx/v1/session?token=${encodeURIComponent(req.headers.authorization)}`,
            {
                auth: {
                    username: process.env.ALLES_ID,
                    password: process.env.ALLES_SECRET
                }
            }
        )).data.user;
    } catch {}
    next();
};