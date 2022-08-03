require('../configs/env.config');
const nodemailer = require("nodemailer");
const { google } = require('googleapis');

exports.sendOTP = async (otp, toemail) => {
    console.log({ env: process.env.VERIFIER_EMAIL });
    console.log("hello");
    const oAuth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLEINT_SECRET,
        process.env.REDIRECT_URI
    );
    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
    const accessToken = await oAuth2Client.getAccessToken();

    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: 'OAuth2',
            user: process.env.VERIFIER_EMAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLEINT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
        },
    });

    const mailOptions = {
        from: 'This is Email Name<process.env.VERIFIER_EMAIL>',
        to: toemail,
        subject: "Please confirm your email account",
        html: `<div>
                    <h3>Hello,</h3>
                    <h4>To verify your email.</h4>
                    <p>Please enter the verification code</p>
                    <h1 style="color: blue;">${otp}</h1>
                </div>`
    }
    smtpTransport.sendMail(mailOptions);
}