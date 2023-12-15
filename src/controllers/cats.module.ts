import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsResourceController } from './cats/cats-resource.controller';

@Module({
  /**
   * nest don't know controller exist and won't create instance of this class
   * need to push that controller to controllers array for @Module decorator
   */
  controllers: [CatsController, CatsResourceController],
})
export class CatsModule {}
