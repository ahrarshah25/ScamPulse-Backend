import { OAuth2Client } from "google-auth-library";
import userModels from "../../models/userModels.js";
import JWT from "jsonwebtoken";

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:5173/google-auth"
);

const googleAuthController = async (req, res) => {
  try {

    const { token } = req.body;

    const { tokens } = await client.getToken(token);

    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { sub, email, name, picture } = payload;

    let user = await userModels.findOne({ email });

    if (!user) {
      user = await new userModels({
        name,
        email,
        googleId: sub,
        avatar: picture,
        role: "user",
        provider: "google",
      }).save();
    }

    const jwtToken = JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user,
      jwtToken,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

export default googleAuthController;
