import express, { Application } from "express";

import users from "./routes/users";
import errorHandler from "./middlewares/error";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", users);
app.use(errorHandler);

export default app;
