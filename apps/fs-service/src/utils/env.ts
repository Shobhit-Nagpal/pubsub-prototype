import env from "../services/env";

export function isDev() {
  return env.environment === "development";
}

export function isProd() {
  return env.environment === "production";
}
