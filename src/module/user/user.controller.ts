import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

import { Controller, Get, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUserByWalletAddress(
    @Query('walletAddress') walletAddress: string,
  ): Promise<UserDto> {
    const user = await this.userService.getUserByWallet(walletAddress);

    return user;
  }
}
