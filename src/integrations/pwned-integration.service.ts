// External modules
import axios from 'axios';
import Context, { NarrowedContext } from 'telegraf/typings/context';
import { Message, Update } from 'telegraf/typings/core/types/typegram'

// Internal modules
import { validateEmail } from '../validators/mail-validator.service';

const pwnedEndpointAPI = 'https://haveibeenpwned.com/api/v3/breachedaccount';

export const checkEmailInHIBP = async (
    ctx: NarrowedContext<Context<Update>, { message: Update.New & Update.NonChannel & Message.TextMessage; update_id: number; }>,
    userEmail: string
) => {
    try {
        if (!await validateEmail(ctx, userEmail)) {
            return;
        }

        await axios.get(`${pwnedEndpointAPI}${encodeURIComponent(userEmail)}`);
        ctx.reply(`The email ${userEmail} has been found in breaches.`);
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 404) {
            ctx.reply(`The email ${userEmail} has not been found in breaches.`);
        } else {
            ctx.reply('An error occurred while checking the email. Please try again later.');
        }
    }
};