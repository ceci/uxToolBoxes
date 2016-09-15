var app = require('./app/config/express.js')();
var routesIndex = require('./app/routes/index.js')(app);

app.listen(3000, function () {
    console.log('Servidor rodando: http://localhost:3000');
});
