import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { sequelize } from "../models";
import { controllers } from "../../controllers";
const app = express();

const corsOptions = {
  origin: "*",
  method: ["post", "get"],
};

app.use(cors(corsOptions));
app.use(express.json());

const port: number = parseInt(process.env.PORT as string, 10);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/signup", controllers.signup);

app.listen(port, async () => {
  console.log(`Express is listening at http://localhost:${port}`);

  await sequelize
    .authenticate()
    .then(async () => {
      console.log("connection Success");
    })
    .catch((e: Error) => {
      console.log("TT : ", e);
    });
});
