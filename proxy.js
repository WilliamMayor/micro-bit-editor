var http = require('http'),
    httpProxy = require('http-proxy');

httpProxy.createProxyServer({target:'http://localhost:3232'}).listen(3000);