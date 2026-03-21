import express from "express";
import sendLoginNotification from "../controllers/notifications/loginNotification.js";
import saveUserToken from "../controllers/notifications/saveToken.js";


const router = express.Router();

router.post("/loginNotification", sendLoginNotification);
router.post("/save-token", saveUserToken);

export default router;