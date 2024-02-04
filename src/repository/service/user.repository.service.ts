import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserRepositoryService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getUserByWallet(walletAddress: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ walletAddress });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async insertOne(walletAddress: string): Promise<UserEntity> {
    const user = this.userRepository.create({ walletAddress });
    await this.userRepository.insert(user);

    return user;
  }
}
