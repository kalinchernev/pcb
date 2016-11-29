var request = require('request');
var config = require('./config');

// Private things
var key = config.cognitiveServices.emotionApi.key1;
var api = 'https://api.projectoxford.ai/emotion/v1.0/recognize';

// Prepare the special headers
var headers = {
  'Ocp-Apim-Subscription-Key': key,
  'Content-type': 'application/json'
};

// Public method returning data in a promise
module.exports = function getEmotion(options) {
  return new Promise((resolve, reject) => {
    var bodyData = JSON.stringify(options.body);

    request({
      url: api,
      headers: headers,
      method: 'POST',
      body: bodyData
    }, (error, response, body) => {
      if (error) {
        reject(error);
      }
      resolve(body);
    })
  })
}
