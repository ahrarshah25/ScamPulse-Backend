import userModels from "../../models/userModels.js";
import { hashPassword } from "../../helpers/authHelper.js";

const resetPasswordController = async (req, res) => {
  try {
    const { token, email, newPassword } = req.body;

    const user = await userModels.findOne({
      email,
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid or expired token",
      });
    }

    const hashedPassword = await hashPassword(newPassword);

    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    res.status(200).send({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error While Reseting Password: " + error.message,
      error,
    });
  }
};

export default resetPasswordController;
