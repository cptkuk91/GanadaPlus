const app = express();
import express from "express";
const dotenv = require("dotenv");
dotenv.config();
import cors from "cors";
import { sequelize } from "../models";

const corsOptions = {
  origin: "*",
  method: ["post", "get"],
};

app.use(cors(corsOptions));
app.use(express.json());

const port: number = parseInt(process.env.PORT as string, 10);

const authRouter = require("../routes/auth");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/auth", authRouter);

app.listen(port, async () => {
  console.log(`Express is listening at http://localhost:${port}`);

  await sequelize
    .authenticate()
    .then(async () => {
      console.log("connection Success");
    })
    .catch((e) => {
      console.log("TT : ", e);
    });
});
