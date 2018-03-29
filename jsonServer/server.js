const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, './db.json'));
const middlewares = jsonServer.defaults();
const devConfig = require('../config/config');
const port = devConfig.port + 1;
server.use(middlewares);
server.use((req, res, next) => {
    if (req) {
        next()
    } else {
        res.sendStatus(401)
    }
})
server.use(router);
server.listen(port, devConfig.host, () => {
    console.log('JSON Server is running on ' + devConfig.host + ':' + port)
});
