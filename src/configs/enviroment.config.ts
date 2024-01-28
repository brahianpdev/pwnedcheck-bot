import dotenv from 'dotenv';
dotenv.config();

const {
    TELEGRAM_BOT_TOKEN
} = process.env;

export const enviromentConfig = {
    telegramBotToken: TELEGRAM_BOT_TOKEN
}

