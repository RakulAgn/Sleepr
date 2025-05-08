import { NOTIFICATIONS_SERVICE } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import Stripe from 'stripe';
import { PaymentsCreateChargeDto } from './dto/payments-create-charge.dto';

@Injectable()
export class PaymentsService {
  private readonly stripe = new Stripe(
    this.configService.get('STRIPE_SECRET_KEY'),
    {
      apiVersion: '2025-04-30.basil',
    },
  );

  constructor(
    private readonly configService: ConfigService,
    @Inject(NOTIFICATIONS_SERVICE)
    private readonly notificationService: ClientProxy,
  ) {}

  async createCharge({ amount, email }: PaymentsCreateChargeDto) {
    // const paymentMethod = await this.stripe.paymentMethods.create({
    //   type: 'card',
    //   card,
    // });

    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'usd',
      confirm: true,
      payment_method: 'pm_card_visa',
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never',
      },
    });

    this.notificationService.emit('notify_email', { email }).subscribe({
      error: (err) => console.error('Failed to emit notification:', err),
    });

    return paymentIntent;
  }
}
