import nodemailer from "nodemailer";
import env from "./env";

export const transporter = nodemailer.createTransport({
  host: env.smtpHost,
  port: parseInt(env.smtpPort!),
  secure: env.smtpSecure === "true", // true for 465, false for other ports
  auth: {
    user: env.smtpUser,
    pass: env.smtpPass,
  },
});
