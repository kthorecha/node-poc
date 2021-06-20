const url = require('url');
const fs = require('fs');

module.exports = {
    homePage: (req, res) => {
        var stream = fs.createReadStream('./index.html');
        stream.on('error', () => {
            res.writeHead(404);
            res.end();
        })
        stream.pipe(res);
    },
    monday: (req, res) => {
        var stream = fs.createReadStream('./monday.html');
        stream.on('error', () => {
            res.writeHead(404);
            res.end();
        })
        stream.pipe(res);
    },
    tuesday: (req, res) => {
        var stream = fs.createReadStream('./tuesday.html');
        stream.on('error', () => {
            res.writeHead(404);
            res.end();
        })
        stream.pipe(res);
    },
    wednesday: (req, res) => {
        var stream = fs.createReadStream('./wednesday.html');
        stream.on('error', () => {
            res.writeHead(404);
            res.end();
        })
        stream.pipe(res);
    },
    invalidReqest: (req, res) => {
        res.statusCode = 400;
        res.setHeader("Content-Type", "text/plain");
        res.end("Invalid Request");
    }
}