var express = require('express');
var app = express();

module.exports = function () {
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(express.static('./app/public'));

    return app;
}
