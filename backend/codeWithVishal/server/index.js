import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";

//password : yX6f3XT0fDOgyrpL
// mongodb+srv://murad:yX6f3XT0fDOgyrpL@cluster0.8xlrx.mongodb.net/myDb?retryWrites=true&w=majority

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); // http://localhost:5000/users/signup
app.use("/tours", tourRouter); // http://localhost:5000/tours/

const MONGODB_URL =
  "mongodb+srv://murad:yX6f3XT0fDOgyrpL@cluster0.8xlrx.mongodb.net/myDb?retryWrites=true&w=majority";

const port = 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log("server is running on ",port));
  })
  .catch((error) => console.log(error));
