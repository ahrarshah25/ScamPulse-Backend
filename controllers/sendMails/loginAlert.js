import transporter from "../../config/nodeMailer.js";
import loginAlertMail from "../../templates/loginAlertMail.js";
import dotenv from "dotenv";
import { UAParser } from "ua-parser-js";
import axios from "axios";

dotenv.config();

const sendLoginAlertMail = async (req, res) => {
  try {
    const { email } = req.body;

    const parser = new UAParser(req.headers["user-agent"]);
    const ua = parser.getResult();

    const device = ua.device.model || ua.device.type || "Desktop";
    const browser = ua.browser.name + " " + ua.browser.version;

    const ipAddress =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress ||
      req.ip;

    const geo = await axios.get(`http://ip-api.com/json/${ipAddress}`);

    const { city, regionName, country, timezone } = geo.data;

    const loginTime = new Date().toLocaleString();
    const timeZone = timezone;

    const mailOption = {
      from: `"ScamPulse" <${process.env.EMAIL}>`,
      to: email,
      subject: "🔐 Login Alert · ScamPulse",
      html: loginAlertMail(
        loginTime,
        timeZone,
        device,
        browser,
        city,
        regionName,
        country,
        ipAddress
      ),
    };

    await transporter.sendMail(mailOption);

    return res.status(200).send({
      success: true,
      message: "Login Alert Mail Successfully Sent",
    });
  } catch (error) {
    console.error(error)
    return res.status(500).send({
      success: false,
      message: "Error While Sending Alert Mail: " + error.message,
      error,
    });
  }
};

export default sendLoginAlertMail;