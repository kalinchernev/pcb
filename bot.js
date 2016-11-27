var config = require('./config')
var builder = require('botbuilder');

// Create chat bot
var connector = new builder.ChatConnector({
  appId: config.MICROSOFT_APP_ID,
  appPassword: config.MICROSOFT_APP_PASSWORD
});

// Make this property public to be used by a decoupled app.
module.exports.connector = connector;

// Construct the bot.
var bot = new builder.UniversalBot(connector);
var intents = new builder.IntentDialog();

// Start bot dialog.
bot.dialog('/', intents);

intents.matches(/^change name/i, [
  (session) => {
    session.beginDialog('/profile');
  },
  (session, results) => {
    session.send(`Ok... Now I will call you ${session.userData.name}`);
  }
]);

// Ask for the user name if it's not known
intents.onDefault([
  (session, args, next) => {
    if (!session.userData.name) {
      session.beginDialog('/profile');
    }
    else {
      next();
    }
  },
  (session, results) => {
    session.send(`Hello ${session.userData.name}!`);
  }
]);

// Dialog: take user name
bot.dialog('/profile', [
  (session) => {
    builder.Prompts.text(session, 'Hi! What is your name?');
  },
  (session, results) => {
    session.userData.name = results.response;
    session.endDialog();
  }
]);