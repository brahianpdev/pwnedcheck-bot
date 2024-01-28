// External modules
import Context, { NarrowedContext } from "telegraf/typings/context";
import { Message, Update } from "telegraf/typings/core/types/typegram";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = async (
    ctx: NarrowedContext<Context<Update>, { message: Update.New & Update.NonChannel & Message.TextMessage; update_id: number; }>,
    userEmail: string
) => {
    try {
        if (!emailRegex.test(userEmail)) {
            ctx.reply('Please enter a valid email address.');
            return false;
        }

        return true;
    } catch (error) {
        console.error(error);
        ctx.reply('An error occurred while validating the email. Please try again later.');
        return false;
    }
};