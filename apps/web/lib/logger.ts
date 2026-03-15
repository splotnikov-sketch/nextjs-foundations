// lib/logger.ts
function createLogger() {
  const write = (level: 'info' | 'warn' | 'error', data: unknown) => {
    const entry = JSON.stringify({
      level,
      timestamp: new Date().toISOString(),
      ...(typeof data === 'object' && data !== null ? data : { message: String(data) }),
    });

    // biome-ignore lint/suspicious/noConsole: logger is the single approved console wrapper
    console[level](entry);
  };

  return {
    info: (data: unknown) => write('info', data),
    warn: (data: unknown) => write('warn', data),
    error: (data: unknown) => write('error', data),
  };
}

export const logger = createLogger();