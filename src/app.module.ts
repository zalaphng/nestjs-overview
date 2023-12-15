import { MiddlewaresModule } from './middlewares/index.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './controllers/cats.module';
import { ProvidersModule } from './providers/cats/cats.module';
import { OtherModule } from './modules/other/other.module';
import { TestDynamicModule } from './modules/other/testdynamic.module';
import { ExceptionModule } from './exceptions/index.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './exceptions/exceptions/http-exceptions.filter';
import { PipesModule } from './pipes/pipes.module';
import { GuardsModule } from './guards/guards.module';
import { UsersModule } from './decorators/users/users.module';
import { InterceptorsModule } from './interceptors/interceptors.module';

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
  imports: [
    CatsModule,
    ProvidersModule,
    OtherModule,
    TestDynamicModule.forRoot([]),
    MiddlewaresModule,
    ExceptionModule,
    PipesModule,
    GuardsModule,
    UsersModule,
    InterceptorsModule,
  ],
  /**
   * re-export dynamic module omit the forRoot() method call in exports array
   * exports: [DatabaseModule]
   */
})
export class AppModule {}
