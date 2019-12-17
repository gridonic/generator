/**
 * Import all types and interfaces used from the gridonic services library here.
 * The library is not allowed be imported elsewhere to keep the application clean from the
 * dependencies to the library
 */

import { Container } from '@gridonic/client-services/src/core/container/Container';

import Lazy from '@gridonic/client-services/src/decorator/lazy';

import { ErrorTracker } from '@gridonic/client-services/src/tracking/error/ErrorTracker';
import SentryErrorTracker from '@gridonic/client-services/src/tracking/error/SentryErrorTracker';

import JsLogger from '@gridonic/client-services/src/core/logging/JsLogger';
import { Logger } from '@gridonic/client-services/src/core/logging/Logger';
import { LogLevel } from '@gridonic/client-services/src/core/logging/LogLevel';

export {
  // Service Container
  Container,

  // Logging
  LogLevel,
  Logger,
  JsLogger,

  // Tracking
  SentryErrorTracker,
  ErrorTracker,

  // Decorators
  Lazy,
};
