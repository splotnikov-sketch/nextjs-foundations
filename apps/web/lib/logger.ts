// lib/logger.ts
function createLogger() {
  const write = (level: 'info' | 'warn' | 'error', data: unknown) => {
    const entry = JSON.stringify({
      level,
      timestamp: new Date().toISOString(),
      ...(typeof data === 'object' && data !== null ? data : { message: String(data) }),
    });

    const stream = level === 'error' ? process.stderr : process.stdout;
    stream.write(`${entry}\n`);
  };

  return {
    info: (data: unknown) => write('info', data),
    warn: (data: unknown) => write('warn', data),
    error: (data: unknown) => write('error', data),
  };
}

export const logger = createLogger();