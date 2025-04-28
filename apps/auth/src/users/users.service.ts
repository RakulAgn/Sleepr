import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRespository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRespository) {}

  async createUser(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }
}
