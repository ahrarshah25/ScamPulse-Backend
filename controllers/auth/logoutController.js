const logoutController = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(200).send({
      success: true,
      message: "Logout Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while logging out user: " + error.message,
      error,
    });
  }
};

export default logoutController;
