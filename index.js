var SlackBot = require("slackbots");
var request = require("request");
var endpoint = "https://noobcode.com/slack"

// create a bot
const envKey = process.env.JOKES_CLONE_BOT_TOKEN
const secKey = process.env.JOKES_CLONE_BOT_SECRET
debugger;
var bot = new SlackBot({
    token: envKey,
    secret:secKey,
    name: 'Joke-bot Clone'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':cat:'
    };

    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    bot.postMessageToChannel('general', 'meow!', params);

    // define existing username instead of 'user_name'
    bot.postMessageToUser('user_name', 'meow!', params);

    // If you add a 'slackbot' property,
    // you will post to another user's slackbot channel instead of a direct message
    bot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' });

    // define private group instead of 'private_group', where bot exist
    bot.postMessageToGroup('private_group', 'meow!', params);
});
