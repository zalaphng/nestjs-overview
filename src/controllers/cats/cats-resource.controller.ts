import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('catsResource')
export class CatsResourceController {
  @Post()
  create(@Body() createCatDto: any) {
    console.log(createCatDto);
    return 'This action adds a new cat';
  }

  /**
   * /catsResource?limit=5
   * @param query limit 5
   * @returns
   */

  @Get()
  findAll(@Query() query: any) {
    console.log(query);
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() updateCatDto: any): string {
    console.log(updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return `This action removes a #${id} cat`;
  }
}
