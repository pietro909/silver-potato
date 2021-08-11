## Proxy server for IO-mock

Please note that you need to download, setup, and run [IO-mock](https://github.com/pagopa/io-mock) _before_
 using this proxy.

### Goal of this project

Proxy self-signed HTTPS endpoints to HTTP ones. All of this on your local machine, for develoment purposes.

WARNING: all about this project is **dangerous** and **must not be used in production**! Use it at your own risk.

### How to run

```
$ npm install
$ NODE_TLS_REJECT_UNAUTHORIZED=0 node index.js
```
