import transporter from "../../config/nodeMailer.js";
import { subscribeMailAdmin, subscribeMailUser } from "../../templates/subscribeMail.js";
import dotenv from "dotenv";

dotenv.config();

const sendSubscribeMail = async (req, res) => {
  try {
    const { email } = req.body;

    const userMailOptions = {
    from: `"ScamPulse Subscription" <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    subject: "New Subscriber",
    html: subscribeMailAdmin(email)
  };

  const adminMailOptions = {
    from: `"ScamPulse" <${process.env.EMAIL}>`,
    to: email,
    subject: "Thanks For Subscribing To ScamPulse",
    html: subscribeMailUser(email)
  }

  await transporter.sendMail(userMailOptions);
  await transporter.sendMail(adminMailOptions);

  return res.status(200).send({
    success: true,
    message: "Subscribed Successfully",
  })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error While Sending Mail: " + error.message,
      error
    })
  }
};

export default sendSubscribeMail;