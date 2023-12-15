import { Module } from '@nestjs/common';
import { ExceptionController } from './index.controller';

@Module({
  controllers: [ExceptionController],
})
export class ExceptionModule {}
