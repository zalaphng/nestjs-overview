import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Custom exceptions
 */
export class ForbiddenException extends HttpException {
  constructor() {
    super('forbidden', HttpStatus.FORBIDDEN);
  }
}
