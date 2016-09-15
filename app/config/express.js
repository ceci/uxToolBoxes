var app = require('express')();

module.exports = function () {
    app.set('views engine', 'handlebars');
    app.set('views', './app/views');

    return app;
}
