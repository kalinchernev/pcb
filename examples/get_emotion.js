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
