import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './logging.interceptors';

@UseInterceptors(new LoggingInterceptor())
@Controller('interceptors')
export class InterceptorsController {
  @Get()
  testInterceptors() {}
}
