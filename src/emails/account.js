const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "molotsky.io@gmail.com",
		subject: "Welcome to the App, thank's for joining in!",
		text: `Welcome to the app,${name}. Please let me know how you like the app`,
	});
};

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: " molotsky.io@gmail.com",
		subject: "One more thing before you go...",
		text: `Hey ${name}, I'm sorry thant you're leaving... How can we improve and change your mind?`,
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail,
};
