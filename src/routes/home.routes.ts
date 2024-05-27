import { Router } from 'express';
import { HomeController } from '../controllers/HomeController';

class HomeRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.intializeRoutes();
  }

  intializeRoutes(): void {
    const home = new HomeController();
    this.router.get("/", (req, res) => { home.Index(req, res) });
  }
}

export default new HomeRoutes().router;