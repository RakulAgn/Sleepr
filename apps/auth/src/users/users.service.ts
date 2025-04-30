import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRespository } from './users.repository';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRespository) {}

  async createUser(createUserDto: CreateUserDto) {
    await this.validateCreateUserDto(createUserDto);
    return await this.userRepository.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    });
  }

  private async validateCreateUserDto(
    createUserDto: CreateUserDto,
  ): Promise<CreateUserDto> {
    try {
      await this.userRepository.findOne({ email: createUserDto.email });
    } catch (error) {
      return;
    }
    throw new UnprocessableEntityException('User already exists');
  }

  async verifyUser(email: string, password: string) {
    const user = await this.userRepository.findOne({ email });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  async getUser(userDto: GetUserDto) {
    const user = await this.userRepository.findOne(userDto);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
