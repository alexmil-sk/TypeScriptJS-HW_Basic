import { Book } from './book.js';
import { books } from './books-collection.js';


function findSuitableBook(genre: string, pagesLimit: number, isMultiple = false): Book | Book[] | undefined {
  const findBook = (book: Book): boolean => {
    return book.genre === genre && book.pageAmount <= pagesLimit
  };

  return isMultiple ? books.filter(findBook) : books.find(findBook);
}

export const foundBook = findSuitableBook('fantasy', 2000, true);

if (foundBook instanceof Book) {
  console.log(foundBook.name);
} else {
  console.table(foundBook);
}

