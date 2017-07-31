var getHTML = require('../http-functions');

function upperCase (input){
  input = input.toUpperCase();
  console.log(input);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, upperCase);