// Internal modules
import { bot } from '../integrations/telegram-integration.service';
import { checkEmailInHIBP } from '../integrations/pwned-integration.service'
import Context, { NarrowedContext } from 'telegraf/typings/context';
import { Message, Update } from 'telegraf/typings/core/types/typegram';

export const setupCommands = (ctx: NarrowedContext<Context<Update>, {
  message: Update.New & Update.NonChannel & Message.TextMessage;
  update_id: number;
}>) => {
  bot.hears('1', () => {
    ctx.reply('Enter your email to check if it has been pwned:');
    handleUserResponse(ctx);
  });

  bot.hears('2', () => {
    ctx.reply('Enter another email to check if it has been pwned:');
    handleUserResponse(ctx);
  });

  bot.hears('3', () => {
    ctx.reply('Exiting. Goodbye!');
    bot.stop();
  });
};

const handleUserResponse = async (
  ctx: NarrowedContext<Context<Update>, {
    message: Update.New & Update.NonChannel & Message.TextMessage;
    update_id: number;
  }>
): Promise<void> => {
  const nextHandler = async () => {
    const userEmail = ctx.message.text;
    await checkEmailInHIBP(ctx, userEmail);
  };

  bot.on('text', nextHandler);
};