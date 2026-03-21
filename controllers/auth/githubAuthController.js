import axios from "axios";
import userModels from "../../models/userModels.js";
import JWT from "jsonwebtoken";

const githubAuthController = async (req, res) => {
  try {
    const { code } = req.body;

    const tokenResponse = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      },
    );

    const accessToken = tokenResponse.data.access_token;

    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const emailResponse = await axios.get(
      "https://api.github.com/user/emails",
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );

    const emailObj = emailResponse.data.find((e) => e.primary && e.verified);
    const email = emailObj?.email || userResponse.data.login + "@github.com";

    let user = await userModels.findOne({ email });
    if (!user) {
      user = await new userModels({
        name: userResponse.data.name || userResponse.data.login,
        email,
        githubId: userResponse.data.id,
        avatar: userResponse.data.avatar_url,
        role: "user",
        provider: "github",
      }).save();
    }

    const jwtToken = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

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

export default githubAuthController;
