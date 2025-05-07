import { IsCreditCard, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CardDto {
  @IsString()
  @IsNotEmpty()
  cvc?: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  exp_month?: number;

  @IsNumber({
    maxDecimalPlaces: 4,
  })
  exp_year?: number;

  @IsCreditCard()
  number?: string;
}
