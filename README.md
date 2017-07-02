# watson-slackbot
This is a simple way using botkit and request to hook up a Slackbot to the Watson Conversation API.
![A preview of a Slackbot Watson conversation](/screenshots/chatpic.png)

### What you need
1. A slackbot token which can be created [here](https://my.slack.com/services/new/bot) and info on bots can be found [here](https://api.slack.com/bot-users).
2. A Watson Conversation bot created via Bluemix, and its corresponding Workspace ID, Username and Password. [Create a bot](https://www.ibm.com/watson/how-to-build-a-chatbot/) or [Find your credentials](https://www.ibm.com/watson/developercloud/doc/common/getting-started-credentials.html)

If you have not used Bluemix/ the conversation API before, it is incredibly simple, and here is a [good reference to get you started](https://www.ibm.com/blogs/watson/2016/12/build-chat-bot/).

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
