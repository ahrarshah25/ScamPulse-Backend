import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import checkAuth from "../utils/checkAuth.js";

dotenv.config();

const authCheckMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "User not logged in",
      });
    }

    const decode = JWT.verify(token, process.env.JWT_SECRET);

    const user = await checkAuth(decode._id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Auth error: " + error.message,
    });
  }
};

export default authCheckMiddleware;