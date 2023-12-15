import { DynamicModule, Module } from '@nestjs/common';
import { CatsModule } from 'src/controllers/cats.module';

export const register = (options: any, entities: any): any[] => {
  return [
    {
      provide: 'DATABASE_CONNECTION',
      useClass: CatsModule,
    },
  ];
};

/**
 * Dynamic modules
 */

@Module({
  imports: [CatsModule],
})
export class TestDynamicModule {
  static forRoot(entities = [], options?: any): DynamicModule {
    const providers = register(options, entities);
    return {
      module: TestDynamicModule,
      providers: providers,
      exports: providers,
    };
  }
}

/**
 * forRoot may return dynamic module synch or asynch
 */
