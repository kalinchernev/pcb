var req = require('request');
var config = require('./config');

var _key = config.cognitiveServices.emotionApi.key1;
var _url = 'https://api.projectoxford.ai/emotion/v1.0/recognize';

var _exampleImageUrl = '';

function emotionReply(err, response, body) {
  console.log(response);
  if (!err && response.statusCode == 200) {
    var imageInfo = JSON.parse(body);
    console.log(imageInfo);
  }
}

var options = {
  url: _url,
  headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': _key,
    'host': 'api.projectoxford.ai'
  },
  data: {
    "url": _exampleImageUrl
  }
}

req.post(options, emotionReply);