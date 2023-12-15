import { Injectable } from '@nestjs/common';
import { Cat } from './cat.dto';
/**
 *   Provider - service, repos, factory, helper..., just a simple class annotated with @Injectable
 *  Can inject dependencies though `constructor`
 */

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
