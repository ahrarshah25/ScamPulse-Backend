import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      default: null,
    },

    googleId: {
      type: String,
      default: null,
    },

    avatar: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },

    provider: {
      type: String,
      enum: ["local", "google", "github"],
      default: "local",
    },
    resetToken: {
      type: String,
      default: undefined,
    },
    resetTokenExpiry: {
      type: Date,
      default: undefined,
    },
    githubId: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      default: "user",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

export default mongoose.model("users", userSchema);
