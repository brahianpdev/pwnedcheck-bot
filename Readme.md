
# PwnedCheck Telegram Bot

PwnedCheck is a Telegram bot designed to verify the security of a user's email address, ensuring it hasn't been compromised. Additionally, the bot provides a bi-weekly reminder at 19:30 to prompt users to recheck their email status.


## Dependencies

[Telegraf](https://telegrafjs.org/#/): A Telegram Bot framework for Node.js.

[Node-cron](https://www.npmjs.com/package/node-cron): A cron-like job scheduler for Node.js.

[Axios](https://axios-http.com/docs/intro): A promise-based HTTP client for making API requests.


## Setup

Install dependencies using `npm install telegraf node-cron axios.` 

Remember to install Typescript types as well.

Set up a Telegram bot on BotFather and note the token.

Clone the repository and create a .env file with your Telegram bot token:

```
TELEGRAM_BOT_TOKEN=<your_telegram_bot_token>
```

Ensure you have Node.js installed on your system.

Run the bot using `npm run dev`.
## Details

The bot leverages the Have I Been Pwned API to check the security status of user email addresses.

Axios is used to make HTTP requests to the Have I Been Pwned API.
Telegraf handles interactions with the Telegram API, allowing users to check their email security status.

Node-cron is utilized to schedule a bi-weekly reminder for users to recheck their email status.

## Configuration:

Adjust the cron schedule in the pwnedCheckBot.js file to customize the reminder frequency.

Modify any other bot settings or messages in the script as needed.

## Disclaimer:

PwnedCheck is a tool to enhance digital security awareness but does not guarantee absolute protection. Users should follow additional security best practices.

Feel free to contribute or report issues! Happy coding!