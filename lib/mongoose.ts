import mongoose from "mongoose";

let isconnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("No MongoDB URL");
  }

  if (isconnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    mongoose.connect(process.env.MONGODB_URL, {
      dbName: "deflow",
    });
    isconnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};
