const basicAuth = require('basic-auth');

function auth(req, res, next) {
    const user = basicAuth(req);
    if (!user || !user.name || !user.pass) {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send('Authentication required.');
    }

    if (user.name === process.env.AUTH_USER && user.pass === process.env.AUTH_PASS) {
        return next();
    } else {
        return res.status(401).send('Access denied.');
    }
}

module.exports = auth;
