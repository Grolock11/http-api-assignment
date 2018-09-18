const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const apiHandler = require('./apiResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);
  const acceptType = request.headers.accept;
  const parsedUrl = url.parse(request.url);
  const parameters = query.parse(parsedUrl.query);

  switch (parsedUrl.pathname) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/style.css':
      htmlHandler.getCss(request, response);
      break;
    case '/success':
      apiHandler.success(request, response, acceptType);
      break;
    case '/badRequest':
      apiHandler.badRequest(request, response, acceptType, parameters);
      break;
    case '/unauthorized':
      apiHandler.unauthorized(request, response, acceptType, parameters);
      break;
    case '/internal':
      apiHandler.internal(request, response, acceptType);
      break;
    case '/forbidden':
      apiHandler.forbidden(request, response, acceptType);
      break;
    case '/notImplemented':
      apiHandler.notImplemented(request, response, acceptType);
      break;
    default:
      apiHandler.notFound(request, response, acceptType);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
