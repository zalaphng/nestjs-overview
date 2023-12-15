import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCatDto } from './cats.dto';
import { createCatSchema } from './z.cats.dto';
import { ZodValidationPipe } from '../zodvalidate.pipes';
import { RolesGuard } from 'src/guards/auth/roles.guard';

/**
 * ValidationPipe: add package class-transformation, class-validate
 * ParseIntPipe
 * ParseFloatPipe
 * ParseBoolPipe
 * ParseArrayPipe
 * ParseUUIDPipe
 * ParseEnumPipe
 * DefaultValuePipe
 * ParseFilePipe
 */

@Controller('pipes')
@UseGuards(RolesGuard)
export class CatsController {
  @Get(':id')
  async findOne(
    @Param(
      'id',
      /**
       * exception error
       */
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return id;
  }

  @Get(':uuid')
  async findOneWithUuid(
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
  ): Promise<any> {
    return uuid;
  }

  @Post('catdto')
  async create(@Body() createCatDto: CreateCatDto) {
    return createCatDto;
  }

  @Post('catzod')
  @UsePipes(new ZodValidationPipe(createCatSchema))
  async createCatWithZod(@Body() createCatDto: CreateCatDto) {
    return createCatDto;
  }

  @Post('catwithval')
  async createWithVal(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    return createCatDto;
  }

  @Get('catwithqueryval')
  async findAll(
    @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe)
    activeOnly: boolean,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ) {
    return { activeOnly, page };
  }
}
