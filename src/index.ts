// Internal modules
import { bot, startHandler, launchBot } from './integrations/telegram-integration.service';

bot.start(startHandler);
launchBot();