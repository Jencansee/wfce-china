import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Body, createHandler, Post, Res, ValidationPipe } from 'next-api-decorators';

class contactDTO {
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
}

class ContactHandler {
  @Post() 
  async contact(@Res() res: NextApiResponse, @Body(ValidationPipe) body: contactDTO) {
    const emailTemplate = this.makeEmail(body);
		const emailStatus = await this.sendEmail(emailTemplate);
				
		//FIXME find a better way to see code status and send it to client
		if (
			emailStatus.rejected.length > 0 && emailStatus.accepted.length < 0
		) res.status(400).json({ statusCode: 400, message: 'Email not sent' }); 
		else res.status(200).json({ statusCode: 200, message: 'Success' });
  }

	async sendEmail(emailTemplate: string) {
		const testAccount = await nodemailer.createTestAccount();
		const transporter = nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false,
			auth: {
				user: testAccount.user,
				pass: testAccount.pass,
			}
		});

		let info = await transporter.sendMail({
			from: 'noreply@wfce.ae',
			to: 'yo@qweqwe.com, qweqwe@asjkd.kz',
			subject: 'WFCE: Contact Form Submition',
			html: emailTemplate,
		});
				
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		
		return info;
	};


	makeEmail(body: contactDTO) {
		return `
			<div>
				<h1>New contact form submition</h1>	
				<b>Name: </b><p>${body.name}</p>
				<b>Email: </b><p>${body.email}</p>
				<b>Message: </b><p>${body.message}</p>
			</div>
		`
	};
}


export default createHandler(ContactHandler);