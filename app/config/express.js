var app = require('express')();

module.exports = function () {
    app.set('views', './app/views');

    return app;
}
