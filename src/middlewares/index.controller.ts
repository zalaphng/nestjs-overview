import { Controller, Get, Post, Put, Query } from '@nestjs/common';

@Controller('middlewares')
export class IndexController {
  @Get()
  getIndex() {}

  @Post()
  postIndex() {}

  @Get(':id')
  getIndexById(@Query('id') id: string) {
    console.log(id);
  }

  @Put()
  putIndex() {
    return 'index - put';
  }
}
