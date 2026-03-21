import express from "express";
import sendSubscribeMail from "../controllers/sendMails/subscribe.js";
import sendLoginAlertMail from "../controllers/sendMails/loginAlert.js";
import sendSignupAlertMail from "../controllers/sendMails/signupAlert.js";
import sendForgotPasswordMail from "../controllers/sendMails/forgotPassword.js";

const router = express.Router();

router.post("/subscribe", sendSubscribeMail);
router.post("/loginAlert", sendLoginAlertMail);
router.post("/signupAlert", sendSignupAlertMail);
router.post("/send-reset-mail", sendForgotPasswordMail);

export default router;