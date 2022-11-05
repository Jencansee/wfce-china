import { contactDTO } from "pages/api/contact";

const makeEmail = (body: contactDTO) => {
	return `
		<div>
			<h1>New contact form submition</h1>	
			<b>Name: </b><p>${body.name}</p>
			<b>Email: </b><p>${body.email}</p>
			<b>Message: </b><p>${body.message}</p>
		</div>
	`
};

export default makeEmail;