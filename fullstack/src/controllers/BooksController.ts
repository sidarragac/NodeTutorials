import type { Request, Response } from 'express';

import { Book } from '../models/Book.js';
import { books } from '../data/Books.js';

export class BooksController {
    static index(req: Request, res: Response): void {
        const viewData: {[key: string]: any} = {};
        viewData['title'] = 'Books';
        viewData['books'] = books;

        res.render('books/index', { viewData: viewData });
    }

    static show(req: Request, res: Response): void {
        const idParam: string = req.params.id as string;
        const id: number = parseInt(idParam);
        const book: Book = Book.findById(books, id);

        const viewData: {[key: string]: any} = {};
        viewData['title'] = 'Book Details';
        viewData['book'] = book;

        res.render('books/show', { viewData: viewData });
    }
}
