import { LogLevel } from "../core/level";

export function getLogLevel(level: number): string {
  switch (level) {
    case LogLevel.Normal:
      return "log";
    case LogLevel.Error:
      return "error";
    case LogLevel.Warn:
      return "warn";
    default:
      return "__unsupported_level__";
  }
}
