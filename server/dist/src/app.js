"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app = (0, express_1.default)();
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const models_1 = require("../models");
const controllers_1 = __importDefault(require("./controllers"));
const corsOptions = {
    origin: "*",
    method: ["post", "get"],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
const port = parseInt(process.env.PORT, 10);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/signup", controllers_1.default.auth);
app.listen(port, async () => {
    console.log(`Express is listening at http://localhost:${port}`);
    await models_1.sequelize
        .authenticate()
        .then(async () => {
        console.log("connection Success");
    })
        .catch((e) => {
        console.log("TT : ", e);
    });
});
