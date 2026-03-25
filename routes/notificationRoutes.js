import express from "express";
import saveUserToken from "../controllers/notifications/saveToken.js";
import sendLoginNotification from "../controllers/notifications/loginNotification.js";
import sendSignupNotification from "../controllers/notifications/signupNotification.js";
import sendForgotPasswordMailNotification from "../controllers/notifications/forgotPasswordMailNotification.js";
import sendResetPasswordNotification from "../controllers/notifications/resetPasswordNotification.js";
import sendSubscribeNotification from "../controllers/notifications/subscribeNotification.js";

const router = express.Router();

router.post("/save-token", saveUserToken);
router.post("/loginNotification", sendLoginNotification);
router.post("/signupNotification", sendSignupNotification);
router.post("/forgotPasswordNotification", sendForgotPasswordMailNotification);
router.post("/resetPasswordNotification", sendResetPasswordNotification);
router.post("/subscribeNotification", sendSubscribeNotification);

export default router;