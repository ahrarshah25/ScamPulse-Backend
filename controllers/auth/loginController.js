import userModels from "../../models/userModels.js";
import { comparePassword } from "../../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModels.findOne({ email: email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found Please Signup",
      });
    }

    const matchPassword = await comparePassword(password, user.password);
    if (!matchPassword) {
      return res.status(404).send({
        success: false,
        message: "Invalid Creditionals",
      });
    }

    const token = await JWT.sign(
      {
        _id: user.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .send({
        success: true,
        message: "Login Successfully",
        user: {
          email: user.email,
          name: user.name,
          role: user.role,
        },
        token,
      });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error While Logging: " + error.message,
      error,
    });
  }
};

export default loginController;
