import logger from "../services/logger";
import { transporter } from "../services/mailer";

export async function sendMail(message: string) {
  try {
    const info = await transporter.sendMail({
      from: '"Local Email Service" <shobhitsnagpal@gmail.com>',
      to: "shobhitsnagpal@gmail.com",
      subject: "New message",
      text: message, // plain‑text body
      html: `<b>${message}</b>`, // HTML body
    });

    logger.log("Message sent:", info.messageId);
  } catch (err) {
    logger.error(`Failed to send mail: ${err}`);
  }
}
