import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersDocument } from './models/user.schema';

@Injectable()
export class UsersRespository extends AbstractRepository<UsersDocument> {
  protected readonly logger = new Logger(UsersRespository.name);

  constructor(
    @InjectModel(UsersDocument.name)
    userModel: Model<UsersDocument>,
  ) {
    super(userModel);
  }
}
