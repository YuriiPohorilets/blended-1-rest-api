"use strict";
const nodemailer = require("nodemailer");

let vit = process.env.USER;
async function sendEmail(data) {
  await console.log(vit, "<-------");
  //   const { userName, userEmail, userText } = data;
  //   // create reusable transporter object using the default SMTP transport
  //   let transporter = nodemailer.createTransport({
  //     host: "smtp-mail.outlook.com",
  //     port: 587,
  //     secure: false, // true for 465, false for other ports
  //     auth: {
  //       user: "kirill_goit55@outlook.com", // generated ethereal user
  //       pass: "filonchuk123", // generated ethereal password
  //     },
  //   });

  //   const emailBody = `<p>Вы получили письмо от ${userName}</p>
  //     <p>Контактный email - ${userEmail}</p>
  //     <p>Он написал собщение - ${userText}</p>`;

  //   // send mail with defined transport object
  //   let info = await transporter.sendMail({
  //     from: "kirill_goit55@outlook.com", // sender address
  //     to: "sayimmortal@gmail.com",
  //     subject:
  //       "First space conference 2023. Black hole problems. The formation of galaxies. The rotation of the planets.", // Subject line
  //     text: userText, // plain text body
  //     html: emailBody, // html body
  //   });

  //   console.log("Message sent: %s", info.messageId);
  //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  return true;
}

module.exports = sendEmail;
