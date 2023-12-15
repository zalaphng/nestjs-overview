import { Body, Controller, Post } from '@nestjs/common';
import { Roles } from './auth/roles.decorator';
import { CreateCatDto } from 'src/controllers/cats/create-cats.dto';

@Controller('guards')
export class GuardsControllers {
  @Post()
  @Roles(['admin'])
  async create(@Body() createCatDto: CreateCatDto) {
    return createCatDto;
  }
}
