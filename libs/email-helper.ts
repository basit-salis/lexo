import nodemailer from "nodemailer";

type Payload = {
  recipient: string;
  confirmationCode: string;
};

export const sendMail = async (data: Payload) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_FROM,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.SMTP_FROM, // sender address
    to: data.recipient, // list of receivers
    subject: "[LEXO BANK] Verification Code", // Subject line
    text: "The verification code will be valid for 30 minute. please do not  share this code with anyone. Don't recognise this activity?   Please <reset your password and contact customer support immediately", // plain text body
    html: `<h4>[LEXO BANK] Verification Code Your verification code: <br/> ${data.confirmationCode}</h4>`, // html body
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      throw new Error(error);
    }
    console.log("Message sent: %s", info.messageId);
    return true;
  });
};
