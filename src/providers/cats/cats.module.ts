import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { HttpService } from './http.service';

/**
 * @Global()
 * make module global
 */

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    HttpService,
    {
      provide: 'HTTP_OPTIONS',
      useValue: {
        token: 'HTTP_TOKEN',
      },
    },
  ],
  /**
   * Share modules Cat service
   */
  exports: [CatsService],
})
export class ProvidersModule {}
