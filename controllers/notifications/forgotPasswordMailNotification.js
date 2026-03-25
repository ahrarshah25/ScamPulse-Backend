import sendPush from "../../utils/fcm.js";
import findUserToken from "../../utils/pushNotification.js";

const sendForgotPasswordMailNotification = async (req, res) => {
  try {
    const { email } = req.body;

    const token = await findUserToken(email.trim().toLowerCase());

    if (!token) {
      return res.status(404).send({
        success: false,
        message: "User Token Not Found",
      });
    }

    const title = "Forgot Password Mail Sent Successfully ✅";
    const body = `Forgot password email has been sent to your email ${email}!`;

    await sendPush(token, title, body);

    return res.status(200).send({
      success: true,
      message: "Notification sent successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error While Pushing Notification: " + error.message,
      error,
    });
  }
};

export default sendForgotPasswordMailNotification;
