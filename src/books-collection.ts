import { Book } from './book.js';
import { myAuthor1, myAuthor2, myAuthor3, FMD} from './author.js';



export const books = [
  new Book('Harry Potter', myAuthor1, 'fantasy', 300, 980, ['классно','здорово']),
  new Book('Lord of the Ring', FMD, 'thriller', 800, 1001, ['увлекательно', 'хорошо']),
  new Book('How to be productive', myAuthor2, 'lifestyle', 200, 500, ['скучно', 'нудно']),
  new Book('Game of Thrones', myAuthor3, 'fantastic', 400, 1500, ['немыслимо', 'обалденно']),
];

export const findMyBook = (shelf: Book[], name: string): Book | undefined => {
  return shelf.find(elem => elem.name == name);
}

export interface iCollection<T> {
  [key:string]: T
}



console.log('Вы ищете книгу: ', findMyBook(books, 'Harry Potter'));


