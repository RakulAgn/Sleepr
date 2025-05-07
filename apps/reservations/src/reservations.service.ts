import { Inject, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRespository } from './reservations.repository';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { PAYMENTS_SERVICE } from '@app/common';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationRepository: ReservationsRespository,
    @Inject(PAYMENTS_SERVICE) private readonly paymentService: ClientProxy,
  ) {}

  async create(createReservationDto: CreateReservationDto, userId: string) {
    return this.paymentService
      .send('create_charge', createReservationDto.charge)
      .pipe(
        map((res) => {
          return this.reservationRepository.create({
            ...createReservationDto,
            invoiceId: res.id,
            timestamp: new Date(),
            userId: userId,
          });
        }),
      );
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
