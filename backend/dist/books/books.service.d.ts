import { Repository } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';
import { CreateBookDto } from 'src/books/dto/create-book.dto';
export declare class BooksService {
    private booksRepository;
    constructor(booksRepository: Repository<Book>);
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book | null>;
    create(createBookDto: CreateBookDto): Promise<Book>;
}
