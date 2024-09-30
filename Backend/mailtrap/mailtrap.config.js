const { MailtrapClient } = require("mailtrap");
const dotenv = require('dotenv');

// const TOKEN = "fb87bf327684a5a7b692d68ab19d9e8a";

dotenv.config();

const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "Passlog",
};

module.exports = {  mailtrapClient, sender };