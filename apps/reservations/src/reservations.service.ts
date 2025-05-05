import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRespository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationRepository: ReservationsRespository,
  ) {}

  create(createReservationDto: CreateReservationDto, userId: string) {
    return this.reservationRepository.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId,
    });
  }

  findAll(userId: string) {
    return this.reservationRepository.find({ userId: userId });
  }

  findOne(_id: string, userId: string) {
    return this.reservationRepository.findOne({ _id, userId });
  }

  update(
    _id: string,
    updateReservationDto: UpdateReservationDto,
    userId: string,
  ) {
    return this.reservationRepository.findOneAndUpdate(
      {
        _id,
        userId,
      },
      {
        $set: updateReservationDto,
      },
    );
  }

  remove(_id: string, userId: string) {
    return this.reservationRepository.findOneAndDelete({ _id, userId });
  }
}
