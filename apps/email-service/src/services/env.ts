import dotenv from 'dotenv';
dotenv.config();

function initEnv() {
  return {
    environment: process.env.APP_ENVIRONMENT,
    port: process.env.PORT,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    smtpSecure: process.env.SMTP_SECURE,
  }
}

const env = initEnv();

export default env;

