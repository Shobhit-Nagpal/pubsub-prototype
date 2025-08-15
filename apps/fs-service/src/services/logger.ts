import { LogLevel } from "../core/level";
import { getLogLevel } from "../utils/logger";

class Logger {
  log(...data: any[]) {
    console.log(this._prefix(), this._messagePrefix(LogLevel.Normal), ...data);
  }

  error(err: unknown) {
    console.error(this._prefix(), this._messagePrefix(LogLevel.Error), err);
  }

  warn(...data: any[]) {
    console.log(this._prefix(), this._messagePrefix(LogLevel.Warn), ...data);
  }

  _timestamp(): string {
    return new Date().toString();
  }

  _messagePrefix(level: number, timestamp = this._timestamp()): string {
    return `${timestamp}: [${getLogLevel(level)}]: `;
  }

  _prefix() {
    return "[logger]: ";
  }
}

const logger = new Logger();

export default logger;
