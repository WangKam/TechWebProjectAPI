module.exports = function (app) {
    require('./routes/laptop.route')(app);
    require('./routes/account.route')(app);
    require('./routes/cpu.route')(app);
};
