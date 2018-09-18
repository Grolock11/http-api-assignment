const success = (request, response, acceptType) => {
  response.writeHead(200, { 'Content-Type': acceptType });

  if (acceptType === 'text/xml') {
    const xml = '<response> <message>This is a successful response</message> <id>Success</id> </response>';

    response.write(xml);
  } else {
    const obj = {
      message: 'This is a successful response',
      id: 'Success',
    };

    response.write(JSON.stringify(obj));
  }

  response.end();
};

const badRequest = (request, response, acceptType, parameters) => {
  if (parameters.valid === 'true') {
    response.writeHead(200, { 'Content-Type': acceptType });

    if (acceptType === 'text/xml') {
      const xml = '<response> <message>This request has the required parameters</message> </response>';

      response.write(xml);
    } else {
      const obj = {
        message: 'This request has the required parameters',
      };

      response.write(JSON.stringify(obj));
    }
  } else {
    response.writeHead(400, { 'Content-Type': acceptType });

    if (acceptType === 'text/xml') {
      const xml = '<response> <message>Missing valid query parameter set to true</message> <id>Bad Request</id> </response>';

      response.write(xml);
    } else {
      const obj = {
        message: 'Missing valid query parameter set to true',
        id: 'Bad Request',
      };

      response.write(JSON.stringify(obj));
    }
  }

  response.end();
};

const unauthorized = (request, response, acceptType, parameters) => {
  if (parameters.loggedIn === 'true') {
    response.writeHead(200, { 'Content-Type': acceptType });

    if (acceptType === 'text/xml') {
      const xml = '<response> <message>You have successfully viewed this content</message> </response>';

      response.write(xml);
    } else {
      const obj = {
        message: 'You have successfully viewed this content',
      };

      response.write(JSON.stringify(obj));
    }
  } else {
    response.writeHead(401, { 'Content-Type': acceptType });

    if (acceptType === 'text/xml') {
      const xml = '<response> <message>Missing loggedIn query paramter set to yes</message> <id>Unauthorized</id> </response>';

      response.write(xml);
    } else {
      const obj = {
        message: 'Missing loggedIn query paramter set to yes',
        id: 'Unauthorized',
      };

      response.write(JSON.stringify(obj));
    }
  }

  response.end();
};

const forbidden = (request, response, acceptType) => {
  response.writeHead(403, { 'Content-Type': acceptType });

  if (acceptType === 'text/xml') {
    const xml = '<response> <message>You do not have access to this content</message> <id>Forbidden</id> </response>';

    response.write(xml);
  } else {
    const obj = {
      message: 'You do not have access to this content',
      id: 'Forbidden',
    };

    response.write(JSON.stringify(obj));
  }

  response.end();
};

const internal = (request, response, acceptType) => {
  response.writeHead(500, { 'Content-Type': acceptType });

  if (acceptType === 'text/xml') {
    const xml = '<response> <message>Internal Server Error. Something went wrong</message> <id>Internal Server Error</id> </response>';

    response.write(xml);
  } else {
    const obj = {
      message: 'Internal Server Error. Something went wrong',
      id: 'Internal Server Error',
    };

    response.write(JSON.stringify(obj));
  }

  response.end();
};

const notImplemented = (request, response, acceptType) => {
  response.writeHead(501, { 'Content-Type': acceptType });

  if (acceptType === 'text/xml') {
    const xml = '<response> <message>A get request for this page has not been implemented yet. Check again later for updated content.</message> <id>Not Implemented</id> </response>';

    response.write(xml);
  } else {
    const obj = {
      message: 'A get request for this page has not been implemented yet. Check again later for updated content.',
      id: 'Not Implemented',
    };

    response.write(JSON.stringify(obj));
  }

  response.end();
};

const notFound = (request, response, acceptType) => {
  if (acceptType) {
    response.writeHead(404, { 'Content-Type': acceptType });
  } else {
    response.writeHead(404, { 'Content-Type': 'application/json' });
  }


  if (acceptType === 'text/xml') {
    const xml = '<response> <message>The page you are looking for was not found</message> <id>Resource Not Found</id> </response>';

    response.write(xml);
  } else {
    const obj = {
      message: 'The page you are looking for was not found',
      id: 'Resource Not Found',
    };

    response.write(JSON.stringify(obj));
  }

  response.end();
};

module.exports = {
  success,
  badRequest,
  forbidden,
  internal,
  unauthorized,
  notImplemented,
  notFound,
};
