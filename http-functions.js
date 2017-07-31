module.exports = function getHTML (options, callback) {
    /* Your code here */
    var https = require('https');

function getHTML (options, callback) {
  var buffer = "";
  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function(data) {
      callback(buffer);
    })
  })
}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
};


