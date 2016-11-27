var config = require('./config')
var builder = require('botbuilder');

// Create chat bot
var connector = new builder.ChatConnector({
    appId: config.MICROSOFT_APP_ID,
    appPassword: config.MICROSOFT_APP_PASSWORD
});

// Make this property public to be used by a decoupled app.
module.exports.connector = connector;

var bot = new builder.UniversalBot(connector);

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
    session.send("Hi, listening!");
});