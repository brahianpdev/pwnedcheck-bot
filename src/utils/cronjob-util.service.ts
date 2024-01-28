// External modules
import { Context, Telegraf } from 'telegraf';
import * as cron from 'node-cron';
import { Update } from 'telegraf/typings/core/types/typegram';

// Internal modules
import { cronJobConfig } from '../configs/cron-job.config';

export const setupCronJob = (ctx: Context<Update>) => {
  // Schedule a task to run every 15 days at 19:30
  cron.schedule(cronJobConfig.frequency, async () => { // Este CRON que venga desde Enviroment.
    try {
      // Send a reminder message to the user using the provided context
      await ctx.reply('Remember to enter your email to check if it has been compromised.');
    } catch (error) {
      console.error('Error sending reminder message:', error);
    }
  });
};