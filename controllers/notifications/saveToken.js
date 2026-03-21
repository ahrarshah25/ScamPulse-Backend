import userModels from "../../models/userModels.js";;

const saveUserToken = async (req, res) => {
  try {
    const { email, token } = req.body;

    if (!email || !token) {
      return res.status(400).json({ message: "Email & token required" });
    }

    await userModels.findOneAndUpdate(
      { email },
      { token },
      { new: true }
    );

    res.status(200).json({ success: true, message: "Token saved" });
    console.log("TOKEN SAVED: " + token);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default saveUserToken;