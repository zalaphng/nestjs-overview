import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware, logger } from './logger/logger.middleware';
import { IndexController } from './index.controller';

@Module({
  controllers: [IndexController],
})
export class MiddlewaresModule implements NestModule {
  /**
   * middleware consumer: helper, chain by fluent style, forRoutes() method can take single string
   * pass a list controllers seperated by commas
   */

  configure(consumer: MiddlewareConsumer) {
    /**
     * restrict middleware in particular request method by passing an object containing the route `path` and `method` for forRoutes()
     * e.g.: import the RequestMethod enum to deference request method type
     */
    consumer
      /**
       * multiple middleware: consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
       */
      .apply(LoggerMiddleware, logger)
      /**
       * exclude certain routes from having middleware applied
       */
      .exclude(
        {
          path: 'index',
          method: RequestMethod.GET,
        },
        {
          path: 'index',
          method: RequestMethod.POST,
        },
        'index/(.*)', // exclude full
      )
      //   .forRoutes({ path: 'index', method: RequestMethod.GET }); // import request method enum refer to desire request
      .forRoutes(IndexController); // for controller
  }
}
