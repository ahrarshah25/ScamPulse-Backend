import transporter from "../../config/nodeMailer.js";
import userModels from "../../models/userModels.js";
import crypto from "crypto";
import dotenv from "dotenv";
import forgotPasswordMail from "../../templates/forgotPasswordMail.js";

dotenv.config();

const sendForgotPasswordMail = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModels.findOne({ email, provider: "local" });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const cryptoToken = crypto.randomBytes(32).toString("hex");
    const expiry = Date.now() + 600000;

    user.resetToken = cryptoToken;
    user.resetTokenExpiry = expiry;

    await user.save();

    const resetLink = `http://localhost:5173/reset-password?token=${cryptoToken}&email=${email}`;

    const mailOption = {
        from: `"ScamPulse" <${process.env.EMAIL}>`,
        to: email,
        subject: '🔐 Reset Your ScamPulse Password',
        html: forgotPasswordMail(email, resetLink),
    };

    await transporter.sendMail(mailOption);

    return res.status(200).send({
        success: true,
        message: "Password reset link set to your email",
    });

  } catch (error) {
    return res.status(500).send({
        success: false,
        message: "Error While Sending Password Reset Mail: " + error.message,
        error,
    });
  }
};


export default sendForgotPasswordMail;