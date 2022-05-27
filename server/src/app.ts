const app = express();
import express from "express";
const dotenv = require("dotenv");
dotenv.config();
import cors from "cors";
import { sequelize } from "../models";

app.use(cors());
app.use(express.json());

const port: number = parseInt(process.env.PORT as string, 10);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 기존 10줄 이상의 routes 코드를 2줄로 변경
const routes = require("./routes/index");
app.use("/", routes);

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
