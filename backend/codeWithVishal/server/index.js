import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from './routes/user.js'

//password : nDA5TTQYUhoKw3sV
//mongodb+srv://murad:<password>@cluster0.kyhh1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users",userRouter)// http://localhost:5000/users/signup

const MONGODB_URL =
  "mongodb+srv://murad:nDA5TTQYUhoKw3sV@cluster0.kyhh1.mongodb.net/myDatabase?retryWrites=true&w=majority";

const port = 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log("server is running"));
  })
  .catch((error) => console.log(error));
