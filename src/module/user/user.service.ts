import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepositoryService } from 'src/repository/service/user.repository.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepositoryService)
    private readonly userRepositoryService: UserRepositoryService,
  ) {}
  async getUserByWallet(walletAddress: string): Promise<UserDto> {
    const userEntity =
      await this.userRepositoryService.getUserByWallet(walletAddress);
    const result: UserDto = {
      id: userEntity.id,
      walletAddress: userEntity.walletAddress,
      nickname: userEntity.nickname,
    };

    return result;
  }

  async createUser() {}
}
