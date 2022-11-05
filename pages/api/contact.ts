import type { NextApiResponse } from 'next';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Body, createHandler, Get, Post, Res, ValidationPipe } from 'next-api-decorators';
import nodemailer from 'nodemailer';
import makeEmail from 'util/makeEmail';


export class contactDTO {
	@IsNotEmpty({
		message: 'Name is required'
	})
	@IsString()
	@MinLength(3, {
		message: 'Name is too short'
	})
	@MaxLength(30, {
		message: 'Name is too long'
	})
	name: string = '';

	@IsNotEmpty({
		message: 'Email is required'
	})
	@IsEmail({}, {
		message: 'Email is invalid'
	})
	email: string = '';

	@IsString()
	message: string = '';
};

class ContactHandler {
  @Get()
	contactGet(@Res() res: NextApiResponse) {
		res.writeHead(401, {
			'Location': '/'
		});
	}

	@Post() 
  async contact(
		@Res() res: NextApiResponse, 
		@Body(ValidationPipe) body: contactDTO
	) {
		const emailTemplate = makeEmail(body);
		const emailStatus = await this.sendEmail(emailTemplate);
		console.log('here email status!', emailStatus);

		if (
			emailStatus.rejected.length > 0 && 
			emailStatus.accepted.length < 0
		) {
			res.status(400).json({ 
				statusCode: 400, 
				message: 'Email not sent, please try again later.\n If the problem persists, please contact us directly.' 
			}); 
		}
		else res.status(200).json({ statusCode: 200, message: 'Success' });
  }

	async sendEmail(emailTemplate: string) {
		const transporter = nodemailer.createTransport({
			host: 'dedrelay.secureserver.net', //? SMTP relay server provided by GoDaddy VPS
			port: 25,
		});

		transporter.verify((err, success) => {
			if (err) console.log('transporter error', err);
			else console.log('transporter success', success);
		});

		let info = await transporter.sendMail({
			from: 'noreply@wfcecorporation.com',
			to: 'adamred280@gmail.com',
			subject: '📨 WFCE: Contact Form Submission',
			html: emailTemplate,
		});
		
		return info;
	};
};

export default createHandler(ContactHandler);