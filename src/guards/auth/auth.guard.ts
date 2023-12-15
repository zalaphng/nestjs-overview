import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
  /**
   * canActive function should return boolean, It can return response either sync or async (Promise or Observable)
   * if true, the request processed
   * if false, Next will deny the request
   */

  /**
   * ExecutionContext: helper method
   */
}
