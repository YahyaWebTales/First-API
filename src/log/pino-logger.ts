import { logger } from "hono-pino";
import pino from "pino";

export function pinoLogger() {
  return logger({
    pino: pino({
      level: "info",
      transport: {
        target: "pino-pretty",
        options: { colorize: true },
      },
    }),
  });
}
