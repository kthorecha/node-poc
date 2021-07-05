const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
    var service = require('./service');
    const reqUrl = url.parse(req.url, true);

    // get
    if ((reqUrl.pathname == '/home' || reqUrl.pathname == '/') && req.method === 'GET') {
        service.homePage(req, res);
    } else if (reqUrl.pathname == '/monday' && req.method === 'GET') {
        service.monday(req, res);
    } else if (reqUrl.pathname == '/tuesday' && req.method === 'GET') {
        service.tuesday(req, res);
    } else if (reqUrl.pathname == '/wednesday' && req.method === 'GET') {
        service.wednesday(req, res);
    } else {
        service.invalidReqest(req, res);
    }
})