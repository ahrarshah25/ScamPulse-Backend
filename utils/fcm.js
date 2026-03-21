import axios from "axios";
import getAccessToken from "../config/getAccessToken.js";

const PROJECT_ID = "scampulse-application-pwa";

const sendPush = async (token, title, body) => {
  try {
    const accessToken = await getAccessToken();

    const res = await axios.post(
      `https://fcm.googleapis.com/v1/projects/${PROJECT_ID}/messages:send`,
      {
        message: {
          token: token,
          notification: {
            title: title,
            body: body,
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ FCM v1 Response:", res.data);
  } catch (error) {
    console.error("❌ FCM v1 Error:", error.response?.data || error.message);
  }
};

export default sendPush;