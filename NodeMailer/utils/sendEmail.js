const nodemailer = require("nodemailer");

const sendEmail = async (to, messageContent) => {
  try {
    //crate transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "prajaypc16@gmail.com",
        pass: "alqe xdcm aulj buzy",
      },
    });

    //message obj
    const message = {
      to,
      subject: "New Message From Prajay's NodeMailer App",
      html: `
      <h3>You have recieved a new message from Prajay's NodeMailer App</h3>
      <p>${messageContent}</p>
      `,
    };

    //send the email
    const info = await transporter.sendMail(message);
    console.log("Message Sent", info.messageId);
  } catch (error) {
    console.log(error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;
