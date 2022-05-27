import { Request, Response } from "express";
import * as express from "express";
const router = express.Router();

module.exports = {
  signUp: async (req: Request, res: Response) => {
    return res.end();
  },
};
