module.exports = function (app) {
    app.get('/', function (req, resp) {
        resp.send('Tela de login');
    });
};
