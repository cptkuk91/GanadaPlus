import express from "express";
import cors from "cors";
const app = express();
const dotenv = require("dotenv");
dotenv.config();
// const port = process.env.PORT;
import { sequelize } from "../models";

app.use(cors());
app.use(express.json());

const port: number = parseInt(process.env.PORT as string, 10);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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
