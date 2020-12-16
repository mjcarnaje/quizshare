import nodemailer from 'nodemailer';

export const sendEmail = async (
	email: string,
	firstName: string,
	url: string
) => {
	const testAccount = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		secure: false,
		auth: {
			user: testAccount.user,
			pass: testAccount.pass,
		},
	});

	let template = {
		from: 'quizshare@gmail.com',
		to: email,
		subject: 'Confirmation',
		text: `Hello ${firstName}`,
		html: `${url}`,
	};

	if (url.includes('changepassword')) {
		template = {
			from: 'quizshare@gmail.com',
			to: email,
			subject: 'Forgot Password',
			text: `Hello ${firstName}`,
			html: `${url}`,
		};
	}

	const info = await transporter.sendMail(template);

	console.log('Message sent: %s', info.messageId);

	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};
