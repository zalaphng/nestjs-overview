import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './create-cats.dto';

@Controller('controllers')
export class CatsController {
  /**
   * Routing, Request
   * /allCats
   */
  @Get('allCats')
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats';
  }

  /**
   * Resource
   * /addCat
   */

  @Post('addCat')
  create(): string {
    return 'This action adds a new cat';
  }

  /**
   * Route wildcards
   * * = any, match: abcd, ab_cd, abecd, ? = optional, + normal char, () normal char, not: - .
   * /abcd, ab_cd, abecd
   */

  @Get('ab*cd')
  findAllWithWillCard() {
    return 'This route uses a wildcard';
  }

  /**
   * Status code
   * return http code 204
   */

  @Post('httpAction')
  @HttpCode(204)
  createCat() {
    return 'This action adds a new cat';
  }

  /**
   * Headers
   * Custom response headers, decorator @Header()
   */
  @Post('getCustomHeader')
  @Header('Cache-Control', 'none')
  createWithHeader() {
    return 'This action adds a new cat';
  }

  /**
   * Route params
   * cats/id/:id
   */

  @Get('/id/:id')
  findOneCats(@Param() params: any) {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  /**
   * pick speicify param
   */

  @Get('/sid/:id')
  findOneCats2(@Param('id') id: any) {
    return `This action returns a #${id} cat`;
  }

  /**
   * Async/await
   * asynchronous
   * every async function return Promise<Type>
   * /cats/asyncFind
   */

  @Get('asyncFind')
  async asyncFindAll(): Promise<any[]> {
    return ['cat1', 'cat2'];
  }

  /**
   *  Rx observable streams
   */

  @Get('streams')
  streamsFindAll(): Observable<any[]> {
    return of(['1', '2']);
  }

  /**
   * Redirection
   * default 302, 3xx auto redirect, xxx except 1st = 3 => none
   */
  @Get('redTest')
  @Redirect('https://nestjs.com', 204) // HTML with redirect: OK. Redirecting to https://nestjs.com
  //   @Redirect('https://nestjs.com', 301)
  redirect() {}

  /**
   * redirect URL dynamically. returning an object following `HttpRedirectResponse` interface
   * return value override any args passed to the @Redirect()
   * /cats/docs?version=5
   */

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: any) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  /**
   * Request payloads, use DTO (Data Transfer Object) schema
   * use DTO: using TS interface, JS Class
   * prefer JS Class: Classes are part of JS ES6, TypeScript interfaces are remove during the transpilation, Nest can't refer to them
   * important for features such as Pipes
   */

  @Post()
  async createCatIDto(@Body() createCat: CreateCatDto) {
    console.log(
      createCat.name + ' - ' + createCat.breed + ' - ' + createCat.breed,
    );
    return 'This action adds a new cat';
  }

  /**
   * second way of manipulating the res is use response object
   * inject a particular response object
   */

  @Post('getResObj1')
  getResObj1(@Res() res: any) {
    // Response 201 CREATED
    res.status(HttpStatus.CREATED).send();
  }

  @Get('getResObj2')
  getResObj2(@Res() res: any) {
    // Response JSON: []
    res.status(HttpStatus.OK).json([]);
  }
}
