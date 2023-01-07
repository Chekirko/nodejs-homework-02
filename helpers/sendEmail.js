const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_KEY } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendEmail = async data => {
  try {
    const email = { ...data, from: 'victorche59@gmail.com' };
    await sgMail.send(email);
    return true;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = sendEmail;
