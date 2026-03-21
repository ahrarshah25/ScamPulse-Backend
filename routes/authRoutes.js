import express from "express";
import signupController from "../controllers/auth/signupController.js";
import loginController from "../controllers/auth/loginController.js";
import googleAuthController from "../controllers/auth/googleAuthController.js";
import githubAuthController from "../controllers/auth/githubAuthController.js";
import resetPasswordController from "../controllers/auth/resetPasswordController.js";
import authCheckMiddleware from "../middlewares/authMiddleware.js";
import logoutController from "../controllers/auth/logoutController.js";

const router = express.Router();

router.post("/register", signupController);
router.post("/login", loginController);
router.post("/google-login", googleAuthController);
router.post("/github-login", githubAuthController);
router.post("/reset-password", resetPasswordController);
router.get("/logout", logoutController);

router.get("/check-auth", authCheckMiddleware, (req, res) => {
  return res.status(200).send({
    success: true,
    message: "User Authenticated",
    user: req.user,
  });
});

export default router;