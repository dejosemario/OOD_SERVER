import { v4 as uuidv4 } from "uuid";

interface IBook {
  title: string;
  author: string;
  ISBN: string;
  id: string;
  borrowed: Boolean;
}

class Book implements IBook {
  title: string;
  author: string;
  ISBN: string;
  id: string;
  borrowed: Boolean;

  /**
   * Creates a new Book object
   * @param title - The title of the book
   * @param author - The author of the book
   * @param isbn - The ISBN of the book
   */

  constructor(
    title: string,
    author: string,
    ISBN: string,
    id: string,
    borrowed: Boolean
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.id = id;
    this.borrowed = borrowed;
  }

  getBookInfo(): string {
    return `This book Title: ${this.title} was written by Author: ${this.author} with ISBN: ${this.ISBN} and ID: ${this.id}`;
  }
}

interface IUser {
  id: string;
  name: string;
  borrowedBooks: IBook[];
  borrowBook(book: IBook): string;
}

class User implements IUser {
  id: string;
  name: string;
  borrowedBooks: IBook[];

  /**
   *
   * @param name - The name of the user
   * @param id - The id of the user
   * @param borrowedBooks - The books borrowed by the user
   * @param borrowBook - To know if the user is eligible to borrow a book
   */

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
    this.borrowedBooks = [];
  }

  borrowBook(book: IBook): string {
    if (this.borrowedBooks.length < 3) {
      return "You can't borrow more than three books";
    }
    this.borrowedBooks.push(book);
    return "Book borrowed successfully";
  }
}
