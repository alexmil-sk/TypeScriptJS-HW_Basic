import { Book } from './book.js';
import { FMD } from './author.js';
import { reviewFND } from './types.js';
import { books } from './books-collection.js';
import { Collection } from './collection.js';


//const book: Book = new Book('Harry Potter', 'fantasy', 980, 1000);
//const book2: Book = new Book('Lord of the Ring');
//
//console.log(book.genre.toUpperCase(), book.price.toFixed(2));
//console.log(book2.genre?.toUpperCase(), book2.price?.toFixed(2));//_Возвращает undefined и программа не //падает
//console.table(book2);
//
//book2.price !== null ? console.log(`Price of the book is: ${book2.price}`) : console.log('You can\'t buy this book((');


//=========================================================================

//const genre: string = 'fairytail';
//const price: number = 908;
//
//const book3: Book = new Book('Some fairytail', genre, null, price);
////console.table(book3);
//
//function serialize(value: unknown): string {
//  if (value === null) {
//    return value + '';
//  }
//
//  if (value instanceof Book) {
//    return `${value.name.toUpperCase()},${value.genre},${value.price.toUpperCase()}`;
//  }
//
//}
//
//console.table(serialize(book3));

//===================================================================

//interface Car {
//wheels: number,
//model: string
//}
//
//const myCars: Car[] = []; 
//const myFavorites: Car[] = [];
//
//const addCar = (car: Car, isFavorite: boolean = false): boolean => {
//
//  if (isFavorite) {
//    myFavorites.push(car);
//  }
//  myCars.push(car);
//  return true;
//};
//
//const newCar: Car = {
//  wheels: 4,
//  model: 'BMW'
//} 
//
//addCar(newCar, true);
//
//console.log(myCars);
//console.log(myFavorites);

//=================================================

//const cookPlov = (...args: string[]) => {
//  console.log(`Rizzotto is done from: ${args.join(', ')}`);
//};
//
//cookPlov('meet', 'rice', 'izum');

//================================================

const bookFMD = new Book('Преступление и наказание', FMD, 'триллер', 800, 2120, reviewFND);

interface iBuyCallback {
  // eslint-disable-next-line no-unused-vars
  (error?: Error, transactionId?: string): void ;
}

function buyRequest() {
  //Логика покупки
  const transactionId = (Math.floor(Math.random() * 10e10)).toString();
  return Promise.resolve(transactionId);
}

const callback: iBuyCallback = (error, transactionId) => {
  if (error === null && transactionId !== null) {
    console.log('Ваша книга: ', bookFMD);
    console.log(books);
    console.log('transactionId: ', transactionId);
    console.log('Buying was successfull!');
  } else {
    console.error('Error: ', error);
  }
};

function buy(book: Book, callback): void {
  buyRequest()
    .then(id => callback(null, id))
    .catch(error => callback(error))
}

//_Попробуем купить Ф.М.Достоевского "Преступление и наказание"
buy(bookFMD, callback);

//_Функция ВОЗЬМИ КНИГУ С ПОЛКИ=========================

//const myCollection: Collection<number, string> = new Collection();

//const BookCollection: Collection<Book, string>;




