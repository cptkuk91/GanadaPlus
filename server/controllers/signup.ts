import { Request, Response } from "express";

export async function signup(req: Request, res: Response) {
  return res.end();
}

// auth/signup으로 나눠야 할지
// auth 내에 전체적으로 내용을 넣을지 고민해보기
