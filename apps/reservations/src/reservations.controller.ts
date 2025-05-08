import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { CurrentUser, JwtAuthGuard, UserDto } from '@app/common';

@Controller('reservations')
@UseGuards(JwtAuthGuard)
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  async create(
    @Body() createReservationDto: CreateReservationDto,
    @CurrentUser() user: UserDto,
  ) {
    return await this.reservationsService.create(createReservationDto, user);
  }

  @Get()
  async findAll(@CurrentUser() user: UserDto) {
    return await this.reservationsService.findAll(user._id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUser() user: UserDto) {
    return await this.reservationsService.findOne(id, user._id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
    @CurrentUser() user: UserDto,
  ) {
    return await this.reservationsService.update(
      id,
      updateReservationDto,
      user._id,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUser() user: UserDto) {
    return await this.reservationsService.remove(id, user._id);
  }
}
