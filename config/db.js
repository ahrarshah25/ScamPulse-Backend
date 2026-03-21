import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To DB ${connect.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error While Connecting MongoDB ${error}`.bgRed.white);
    }
}

export default connectDB;