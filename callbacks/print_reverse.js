var getHTML = require('../http-functions');

function printReverse (input){

for (i = input.length; i > 0; i--){
  input+=input[i];
  }
  console.log(input);
  }

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printReverse);