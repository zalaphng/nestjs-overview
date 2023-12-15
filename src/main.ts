import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { logger } from './middlewares/logger/logger.middleware';
import { HttpExceptionFilter } from './exceptions/exceptions/http-exceptions.filter';
import { AllExceptionsFilter } from './exceptions/exceptions/all.exceptions';
import { ValidationPipe } from './pipes/validation.pipes';
import { RolesGuard } from './guards/auth/roles.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptors';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });
  // Global middleware
  app.use(logger);
  /**
   * Global Filter
   */
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  /**
   * Loggin Interceptor
   */
  app.useGlobalInterceptors(new LoggingInterceptor());
  // app.useGlobalGuards(new RolesGuard());
  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  await app.listen(5000);
}

bootstrap();
