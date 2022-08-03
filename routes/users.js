const express = require('express');
const router = express.Router();
const { sendEmail } = require("../controller/sendEmail");

/* GET users listing. */
router.post('/send_email', sendEmail);

module.exports = router;
