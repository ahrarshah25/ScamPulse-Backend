import userModels from "../models/userModels.js";

const findUserToken = async (email) => {
  try {
    const user = await userModels.findOne({ email: email.trim().toLowerCase() });
    return user?.token;
  } catch (error) {
    console.error(error);
  }
};

export default findUserToken;