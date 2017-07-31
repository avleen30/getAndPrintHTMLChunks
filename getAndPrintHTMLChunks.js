var https = require('https');

function getAndPrintHTMLChunks() {

  var buffer = "";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
    };

    https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      // console.log(data + '\n');
      buffer += data;
    });
    response.on('end', function(data) {
      console.log (buffer);
    })
  });
}

getAndPrintHTMLChunks();