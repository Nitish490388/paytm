import mongoose from "mongoose";

export const ConnectDB = () => {
  const URI = process.env.MONGO_URI;

  try {
    const connection = mongoose.connect(URI);
    console.log("DB CONNECTED");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};