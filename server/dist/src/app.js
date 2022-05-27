"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app = (0, express_1.default)();
const express_1 = __importDefault(require("express"));
const dotenv = require("dotenv");
dotenv.config();
const cors_1 = __importDefault(require("cors"));
const models_1 = require("../models");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = parseInt(process.env.PORT, 10);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// 기존 10줄 이상의 routes 코드를 2줄로 변경
const routes = require("./routes/index");
app.use("/", routes);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Express is listening at http://localhost:${port}`);
    yield models_1.sequelize
        .authenticate()
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("connection Success");
    }))
        .catch((e) => {
        console.log("TT : ", e);
    });
}));
//# sourceMappingURL=app.js.map