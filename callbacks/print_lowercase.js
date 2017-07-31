var getHTML = require('../http-functions');

function lowerCase (input){
  input = input.toLowerCase();
  console.log(input);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, lowerCase);