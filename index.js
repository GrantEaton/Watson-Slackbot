
var Botkit = require('botkit');
var request = require('request');
require('dotenv').config()
var watson = require('watson-developer-cloud');
var controller = Botkit.slackbot({debug: false});
var bot = controller.spawn({ token:  process.env.botToken }).startRTM();

var context = {};

controller.hears( '(.*)', ['direct_message'], function(bot, message) {
	//console.log(message);

	var conversation = watson.conversation({
	  username: process.env.username,
	  password: process.env.password,
	  version: 'v1',
	  version_date: '2017-04-21'
	});

	// replace with the context obtained from the initial request

	conversation.message({
		  workspace_id: process.env.workspaceID,
		  input: {'text': message.text},
		  context: context
	},  function(err, res) {
		  if (err){
				bot.reply("I'm sorry, workbot had an internal error of: ", err);
				console.log('error:', err);
				throw new Error("Error: ", err)
		  }
		  else{
				//console.log(response);
				bot.reply(message, res.output.text[0]);
				context = res.context;
				//console.log(JSON.stringify(res, null, 2));
	     }
	});
});

