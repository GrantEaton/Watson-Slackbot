# Watson-Slackbot
A Slackbot built by the Cognitive Academy team to leverage the Watson Discovery and Chatbot APIs to enable users in IBM guilds to find answers to questions more effectively.
![A preview of a Slackbot Watson conversation](/screenshots/chatpic.png)

### What you need
1. A slackbot token **(NOTE for the cognitive academy team: PM me and I'll send you our bot token)**, which can be created [here](https://my.slack.com/services/new/bot) and info on bots can be found [here](https://api.slack.com/bot-users).
2. A Watson Conversation bot created via Bluemix, and its corresponding Workspace ID, Username and Password. [Create a bot](https://www.ibm.com/watson/how-to-build-a-chatbot/) or [Find your credentials](https://www.ibm.com/watson/developercloud/doc/common/getting-started-credentials.html)

### Setup
1. Clone the repo with: `git clone git@github.ibm.com:Grant-Lloyd-Eaton/cognitive-slackbot.git`
2. cd into the directory `cd cognitive-slackbot`
3. Run an `npm install`
4. Make sure you are in the main project directory
5. Create a file called **.env** with the following data:
```
workspaceID = '<enter your workspaceID here>'
username = '<enter your username here>'
password = '<enter your password here>'
botToken = '<enter your botToken here>'
```
6. Edit your Slackbot token, as well as your workspace ID, username and password to the **.env** file
7. Run `npm start`
8. Message your bot!

### Coding Guidelines
1. Please use `snake_case` for json objects/database values (all lower case, underscores for spaces) and `camelCase` for variable names. Lets try to not make things confusing :D
2. Try to log every error you can. Most callbacks accept an error, so please use: ```throw new Error("I am an error message. Use me.")```
3. If using the variables, `error`, `response` or `request`, please use the shorthand of `err`, `res` or `req`.
