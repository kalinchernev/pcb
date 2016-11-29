var config = require('./config');
var _key = config.cognitiveServices.emotionApi.key1;
var _url = 'https://api.projectoxford.ai/emotion/v1.0/recognize';
var _exampleImageUrl = 'https://pcb-kalinchernev.c9users.io/example.jpg';

var request = require('request');

var headers = {
  'Ocp-Apim-Subscription-Key': _key,
  'Content-type': 'application/json'
};

var dataString = `{ "url": "${_exampleImageUrl}" }`;

var options = {
  url: 'https://api.projectoxford.ai/emotion/v1.0/recognize',
  method: 'POST',
  headers: headers,
  body: dataString
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

request(options, callback);