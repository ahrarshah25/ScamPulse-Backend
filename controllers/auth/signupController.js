import userModels from "../../models/userModels.js";
import { hashPassword } from "../../helpers/authHelper.js";

const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModels.findOne({ email: email });

    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User Already Registered.",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await new userModels({
      name,
      email,
      password: hashedPassword,
      role: "user",
      provider: "local",
      token,
    }).save();

    return res.status(200).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error While Registering User: " + error.message,
      error,
    });
  }
};

export default signupController;
