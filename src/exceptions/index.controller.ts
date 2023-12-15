import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from './exceptions/http-exceptions.filter';

@Controller('exceptions')
export class ExceptionController {
  /**
   * throwing stadard exceptions
   * /exceptions
   */
  @Get()
  async findAll() {
    /**
     * constructor HttpException:
     * + response
     * + status
     */
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('findAll')
  async findAllCatchExceptions() {
    try {
      return 'find all';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get('forbidden')
  async findAllForbidden() {
    throw new ForbiddenException();
  }

  /**
   * /exceptions
   */

  // @UseFilters(new HttpExceptionFilter())
  @UseFilters(HttpExceptionFilter)
  @Post()
  async testFilter(@Body() body: any) {
    throw new ForbiddenException();
  }
}
