import { Controller, Get, Param, ValidationPipe } from '@nestjs/common';
import { User } from '../user.decorator';
import { UsersDTO } from './users.dto';

@Controller('users')
export class UsersController {
  @Get()
  async findOne(@User('first') user: UsersDTO) {
    /**
     * Get user from request
     */
    console.log(user);
  }

  @Get('entity')
  async findOneWithUserEntity(
    @User(new ValidationPipe({ validateCustomDecorators: true }))
    user: UsersDTO,
  ) {
    console.log(user);
  }
}
