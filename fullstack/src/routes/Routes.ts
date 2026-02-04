import { Router } from 'express';

import { HomeController } from '../controllers/HomeController.js';
import { BooksController } from '../controllers/BooksController.js';

export default class Routes {
    static initializeRoutes(): Router {
        const router: Router = Router();

        router.get('/', HomeController.index);
        router.get('/about', HomeController.about);
        router.get('/contact', HomeController.contact);
        
        router.get('/books', BooksController.index);
        router.get('/books/:id', BooksController.show);

        return router;
    }
}
