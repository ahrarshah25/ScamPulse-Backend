import transporter from "../../config/nodeMailer.js";
import signupAlertMail from "../../templates/signupAlertMail.js";
import dotenv from "dotenv";

dotenv.config();

const sendSignupAlertMail = async (req, res) => {
  try {
    const { name, email } = req.body;

    const mailOption = {
      from: `"ScamPulse" <${process.env.EMAIL}>`,
      to: email,
      subject: "🎉 Welcome to ScamPulse – Let’s get started",
      html: signupAlertMail(name, email),
    };

    await transporter.sendMail(mailOption);

    return res.status(200).send({
      success: true,
      message: "Signup Email Sent",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error While Sending Signup Alert Mail: " + error.message,
      error,
    });
  }
};

export default sendSignupAlertMail;
