import { Router } from 'express';
import { HomeController } from '../controllers/HomeController.js';

export default class Routes {
    static initializeRoutes(): Router {
        const router: Router = Router();

        router.get('/', HomeController.index);

        return router;
    }
}