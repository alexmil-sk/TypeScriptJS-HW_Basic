import { Book } from './book.js';
import { books as booksColl } from './books-collection.js';
import { FND } from './author.js';
import { reviewFND } from './types.js';
//import { search, lookup} from 'google-books-search';
import * as books from 'google-books-search';

//=======================================================================================

const bookFND = new Book('Преступление и наказание', FND, 'триллер', 800, 2120, reviewFND);

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
    console.log('Ваша книга: ', bookFND);
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

//_Попробуем купить Ф.Н.Достоевского "Преступление и наказание"
buy(bookFND, callback);

//========================================================================================

//;_.search(query, options, callback);

books.search('Professional JavaScript for Web Developers', { field: 'authors'},function (error, results) {
  if (!error) console.log(results);
  else console.log(error);
});

