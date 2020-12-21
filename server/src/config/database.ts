import mongoose, { Connection } from "mongoose";
import * as env from "../utils/constants";

export async function connect(): Promise<void> {
  await mongoose.connect(env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  const connection: Connection = mongoose.connection;

  connection.once("open", () => {
    console.log(`MongoDB connected to: ${connection.host}`);
  });

  connection.on("error", () => {
    console.error(`Could not connect to MongoDB`);
  });
}

export async function disconnect(): Promise<void> {
  await mongoose.disconnect();
}
