export class Book {
    constructor(
        public id: number,
        public title: string,
        public category: string,
        public price: number,
        public stock: number
    ){}

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getCategory(): string {
        return this.category;
    }
    
    public getPrice(): number {
        return this.price;
    }

    public getStock(): number {
        return this.stock;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setCategory(category: string): void {
        this.category = category;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public setStock(stock: number): void {
        this.stock = stock;
    }

    public static findById(books: Book[], id: number): Book {
        const book = books.find(book => book.id === id);
        if (!book) {
            throw new Error(`Book with id ${id} not found`);
        }

        return book;
    }
}