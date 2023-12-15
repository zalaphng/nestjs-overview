import { Inject } from '@nestjs/common';

/**
 * Optional providers
 * Class may depend on configuration object, but if none was passed, the default values should be used
 * use Inject() instead of use super() in subclass
 */

export class HttpService<T> {
  constructor(@Inject('HTTP_OPTIONS') private readonly httpClient: T) {}

  getHttpOptions() {
    console.log(this.httpClient);
    return this.httpClient;
  }
}
