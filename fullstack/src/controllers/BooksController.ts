import type { Request, Response } from 'express';

import { books } from '../data/Books.js';

export class BooksController {
    static index(req: Request, res: Response): void {
        const viewData: {[key: string]: any} = {};
        viewData['title'] = 'Books';
        viewData['books'] = books;

        res.render('books/index', { viewData: viewData });
    }
}
