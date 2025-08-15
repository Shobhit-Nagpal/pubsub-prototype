import dotenv from 'dotenv';
dotenv.config();

function initEnv() {
  return {
    environment: process.env.APP_ENVIRONMENT,
    port: process.env.PORT,
  }
}

const env = initEnv();

export default env;

