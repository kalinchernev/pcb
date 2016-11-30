# PCB

## Setup

0. You need to install [`node.js`](https://nodejs.org/en/download/)
1. Clone the repo and `npm install` to get dependencies
2. Create a `config.json` in your home directory with similar structure of config.dist.json (you can just copy this file to config.json and add your values, i.e. `cp config.dist.json ~/config.json`)
3. Create an app (bot) and take its handle, id, etc. for the config file
4. Add the following "Messaging endpoint" in the bot settings page https://dev.botframework.com/bots?id=YOUR_BOT_ID as https://YOUR_PUBLIC_IP_ADDRESS/api/messages
5. Check out the "Useful links" section for further details

## Emotion wrapper

`emotion.js` abstracts service calls to the Emotions API, works with promises
in order to be `then()`-able. Example implementation included:

```
var getEmotion = require('../emotion')

var imageUrl = 'https://pcb-kalinchernev.c9users.io/example.jpg'

var options = {
  body: {
    url: imageUrl
  }
}

// Get a then-able reply from the expert
getEmotion(options).then((data) => {
  console.log(data)
});
```

## Useful links

- [List of bots](https://dev.botframework.com/bots)
- [List of services](https://www.microsoft.com/cognitive-services)
- [Bot intelligence](https://docs.botframework.com/en-us/bot-intelligence/getting-started/#navtitle)
- [Node.js bot builder](https://docs.botframework.com/en-us/node/builder/overview/)
- [CURL builder](https://curlbuilder.com/)
- [CURL to code](http://curl.trillworks.com/#node)

## Misc

- `runners` directory contains a custom runner with nodemon: faster development