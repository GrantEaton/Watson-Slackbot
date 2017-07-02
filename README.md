# watson-slackbot
A Slackbot built by the Cognitive Academy team to leverage the Watson Discovery and Chatbot APIs to enable users in IBM guilds to find answers to questions more effectively.
![A preview of a Slackbot Watson conversation](/screenshots/chatpic.png)

### What you need
1. A slackbot token which can be created [here](https://my.slack.com/services/new/bot) and info on bots can be found [here](https://api.slack.com/bot-users).
2. A Watson Conversation bot created via Bluemix, and its corresponding Workspace ID, Username and Password. [Create a bot](https://www.ibm.com/watson/how-to-build-a-chatbot/) or [Find your credentials](https://www.ibm.com/watson/developercloud/doc/common/getting-started-credentials.html)

### Setup
1. Clone the repo with: `git clone git@github.com:GrantEaton/Watson-Slackbot.git`
2. cd into the directory `cd cognitive-slackbot`
3. Run an `npm install`
4. Make sure you are in the main project directory
5. Edit the file called **.env** with the following data:
```
workspaceID = '<enter your workspaceID here>'
username = '<enter your username here>'
password = '<enter your password here>'
botToken = '<enter your botToken here>'
```
6. Run `npm start`
7. Message your bot!
