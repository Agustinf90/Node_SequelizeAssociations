require("dotenv").config();

let config = {
  session_duration: process.env.SECRET_KEY_SESSION,
  token_phrase: process.env.PRIVATE_KEY,
  db_pass: process.env.DB_PASS,
  db: process.env.DB,
  db_username: process.env.DB_USERNAME,
  db_host: process.env.DB_HOST,
  email_transporter: process.env.EMAIL_TRANSPORTER,
  email_tp_pass: process.env.EMAIL_TP_PASS,
};

module.exports = { config };
