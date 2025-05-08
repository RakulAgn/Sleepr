import { Injectable } from '@nestjs/common';
import { NotifyEmailDto } from './dto/notify-email.dto';

@Injectable()
export class NotificationsService {
  async notifyEmail({ email }: NotifyEmailDto) {
    // Simulate sending an email
    console.log(`Sending email to ${email}`);
    // Here you would integrate with an email service provider
    // For example, using nodemailer or any other email service
    return true;
  }
}
