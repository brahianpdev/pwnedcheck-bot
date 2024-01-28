// External modules
import { Telegraf, Context, NarrowedContext } from 'telegraf'
import { Message, Update } from 'telegraf/typings/core/types/typegram'

// Internal modules
import { enviromentConfig } from '../configs/enviroment.config';
import { setupCommands } from '../commands/telegram-commands.service';
import { setupCronJob } from '../utils/cronjob-util.service';

export const bot = new Telegraf(enviromentConfig.telegramBotToken)

const welcomeMessage = 'Welcome to Pwned Check BOT, select options: \n';
const optionsText = '\n1 - Check mail pwned\n' +
    '2 - Check another mail\n' +
    '3 - Exit';

export const startHandler = (ctx: NarrowedContext<Context<Update>, {
    message: Update.New & Update.NonChannel & Message.TextMessage;
    update_id: number;
}>) => {
    ctx.reply(welcomeMessage + optionsText);
    setupCommands(ctx);
    setupCronJob(ctx);
};

export const launchBot = () => {
    bot.launch();
};
