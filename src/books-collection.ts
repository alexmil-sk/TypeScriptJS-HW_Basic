import { Book } from './book.js';
import { myAuthor1, myAuthor2, myAuthor3, FMD } from './author.js';
import {Collection} from './collection.js';



export const books = [
  new Book('Harry Potter', myAuthor1, 'fantasy', 300, 980, ['классно','здорово']),
  new Book('Lord of the Ring', FMD, 'thriller', 800, 1001, ['увлекательно', 'хорошо']),
  new Book('How to be productive', myAuthor2, 'lifestyle', 200, 500, ['скучно', 'нудно']),
  new Book('Game of Thrones', myAuthor3, 'fantastic', 400, 1500, ['немыслимо', 'обалденно']),
];

export class Product {
  price: number = 0;
}


export const findMyBook = (shelf: Book[], name: string): Book | undefined => {
  return shelf.find(elem => elem.name == name);
}

export interface iCollection<T> {
  [key:string]: T
}

//let newShelf: iCollection<string>;

export const getFromMap = <K, V>(data: Map<K, V>, key: K) => {
  const value = data.get(key);
  if (value === null) throw Error('Error...')

  return value;
} 

const myMap: Map<number, number> = new Map();

getFromMap(myMap, 1);


console.log('Вы ищете книгу: ', findMyBook(books, 'Harry Potter'));




export class ProductCollection<T extends Product> extends Collection<T> {
  get price(): number {
    let totalPrice = 0;

    const keys = Object.getOwnPropertyNames(this.items);

    for (const key of keys) {
      const item: T = this.items[key];
      totalPrice += item.price;
    }
    return totalPrice;
  }
}


