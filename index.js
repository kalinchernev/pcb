var path = require('path')
var os = require('os')

var express = require('express')
var app = express()

var config = require(path.resolve(os.homedir() + '/config.json'))

app.get('/', (req, res) => {
  res.send(`
      <!DOCTYPE html>
        <html>
          <body>
            <iframe style="height:400px;" src='https://webchat.botframework.com/embed/${config.botHandle}?s=${config.web_chat.key1}'></iframe>
          </body>
        </html>
  `)
})

app.listen(process.env.PORT, () => {
  console.log(`Server fired at ${process.env.PORT}`)
})
