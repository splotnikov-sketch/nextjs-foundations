// src/instrumentation.ts

import { trace } from '@opentelemetry/api';
import { registerOTel } from '@vercel/otel';
import { logger } from 'lib/logger';
import type { Instrumentation } from 'next';

export function register() {
  registerOTel({
    serviceName: 'nextJs-foundations-web',
  });
}

export const onRequestError: Instrumentation.onRequestError = (
  err,
  request,
  context
) => {
  const activeSpan = trace.getActiveSpan();
  const traceId = activeSpan?.spanContext().traceId;

  const error = err instanceof Error ? err : new Error(String(err));
  const digest =
    'digest' in error ? (error as { digest: string }).digest : undefined;

  logger.error({
    message: error.message,
    digest,
    traceId,
    path: request.path,
    method: request.method,
    routerKind: context.routerKind,
    routePath: context.routePath,
    routeType: context.routeType,
    renderSource: context.renderSource,
  });
};
