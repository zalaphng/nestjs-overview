import { Module } from '@nestjs/common';
import { GuardsControllers } from './guards.controllers';

@Module({
  controllers: [GuardsControllers],
})
export class GuardsModule {}
