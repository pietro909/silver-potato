const httpProxy = require('http-proxy');

console.log(process.env.NODE_TLS_REJECT_UNAUTHORIZED)

httpProxy.createProxyServer({
  target:'https://backend.localhost:8000',
  secure: false
}).listen(9977);


httpProxy.createProxyServer({
  target:'https://spid-testenv2:8088',
  secure: false
}).listen(9978);
