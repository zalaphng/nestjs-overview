import { HttpService } from './http.service';
import { Cat } from './cat.dto';
import { CatsService } from './cats.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

//  Controllers shall handle HTTP requests and delegate more complex tasks to the services.
@Controller('providers/cats')
export class CatsController {
  // inject provider
  constructor(
    private readonly catsService: CatsService,
    private readonly httpService: HttpService<string>,
  ) {}

  /**
   * Nest use Dependency Injection pattern
   * Easy to manage dependencies: provider resolved by type and afterward
   */

  @Post()
  async create(@Body() createCatDto: Cat) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  /**
   * Optional providers
   * Get http token
   * /providers/cats/customService
   */

  @Get('customService')
  getHttpToken() {
    return this.httpService.getHttpOptions();
  }

  /**
   * Provider registration
   * register service in module providers[]
   */
}
