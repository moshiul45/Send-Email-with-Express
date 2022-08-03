const { sendOTP } = require("../repositiry/send_email");
const { schema } = require("../repositiry/validation");

exports.sendEmail = async (req, res) => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log({ otp });
    const { email } = req.body;
    /*
        schema.validate({ email }).hasOwnProperty("error") will return true when the email is invalid
        return false when email is valid
    */
    if (otp != null && schema.validate({ email }).hasOwnProperty("error") == false) {
        sendOTP(otp, email);
        res.status(200).json({
            message: `Email has been sent to ${email}`
        })
    } else {
        res.status(401).json({
            message: "Email is invalid or OTP is not generated!"
        })
    }

}