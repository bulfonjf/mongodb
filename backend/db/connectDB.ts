import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process?.env?.MONGO_URI?.toString() || "");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err: any) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
}
