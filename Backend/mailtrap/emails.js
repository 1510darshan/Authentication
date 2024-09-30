const { mailtrapClient, sender } = require('./mailtrap.config');
const { VERIFICATION_EMAIL_TEMPLATE } = require('./emailTemplates'); // Make sure this path is correct

const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        // Replace the {verificationCode} placeholder with the actual token
        const emailBody = VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken);

        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: 'Verify your email address',
            html: emailBody,  // Use the email body with the replaced verification code
            category: "Email Verification"
        });

        console.log("Email sent Successfully");
    } catch (error) {
        console.log("Error sending verification email", error);
        throw new Error(`Error sending verification email: ${error.message}`);
    }
}

module.exports = sendVerificationEmail;