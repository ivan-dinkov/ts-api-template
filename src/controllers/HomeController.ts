import { Request, Response } from "express";

export class HomeController {
  async Index(req: Request, res: Response): Promise<void> {
    await res.json({msg:"Working"});
  }
}
