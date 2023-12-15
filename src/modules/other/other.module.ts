import { Module } from '@nestjs/common';
import { CatsModule } from 'src/controllers/cats.module';

/**
 * @Module({
 *  providers[]
 *  imports[]
 *  exports[]
 *  controllers[]
 *  module encapsulates by DEFAULT
 * })
 * use other module providers: need to export provider from a modules
 */

/**
 * Module is singleton, can share same instance of any provider between multiple modules
 */

@Module({
  imports: [CatsModule],
})
export class OtherModule {}
