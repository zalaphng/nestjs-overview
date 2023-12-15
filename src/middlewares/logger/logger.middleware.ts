import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

/**
 * implement NestMiddleware
 */

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request GET....');
    next();
  }
}

/**
 * functional middleware
 */
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request....`);
  next();
}
