const express = require('express'),
    proxy = require('http-proxy-middleware');

let target = 'https://www.walmart.com';

const onProxyRes = (proxyRes, req, res) => {
    proxyRes.headers['content-security-policy-report-only'] = undefined;
};

module.exports = (port) => {
    const app = express();
    app.use('/', proxy({ target, changeOrigin: true, onProxyRes}));
    app.listen(port, () => console.log('Server is started on port ' + port));
};

