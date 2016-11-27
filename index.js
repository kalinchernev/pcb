var express = require('express')
var app = express()

var bot = require('./bot')
var config = require('./config')

// Attach middleware to make files public
app.use(express.static('public'))

// Bind the bot endpoint to the app
app.post(config.botEndpoint, bot.connector.listen())

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
      <html>
        <body>
          <iframe style="height:450px;" src='https://webchat.botframework.com/embed/${config.botHandle}?s=${config.web_chat.key1}'></iframe>
        </body>
      </html>
  `)
})

app.listen(process.env.PORT, () => {
  console.log(`Server fired at ${process.env.PORT}`)
})
