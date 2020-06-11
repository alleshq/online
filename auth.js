module.exports = (req, res, next) => {
    req.user = "00000000-0000-0000-0000-000000000000";
    next();
};