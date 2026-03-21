import findUserToken from "../../config/pushNotification.js";
import sendPush from "../../utils/fcm.js";

const sendLoginNotification = async (req, res) => {
  try {
    const { name, email } = req.body;

    console.log("Incoming Email:", email);

    const user = await findUserToken(email.trim().toLowerCase());

    console.log("User Found:", user);


    const token = user?.token;

    if (!token) {
      return res.status(404).send({
        success: false,
        message: "User Token Not Found",
      });
    }

    const title = "Login Alert 🔐";
    const body = `Welcome ${name}, you have successfully logged in!`;

    await sendPush(token, title, body);

    return res.status(200).send({
      success: true,
      message: "Notification sent successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error While Pushing Notification: " + error.message,
      error,
    });
  }
};

export default sendLoginNotification;
