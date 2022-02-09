import { Book } from './book.js';
import { FND } from './author.js';
import { reviewFND } from './types.js';

const bookFND = new Book('Преступление и наказание', FND, 'триллер', 800, 2120, reviewFND);
function buyRequest() {
  //Логика покупки
  const transactionId = (Math.floor(Math.random() * 10e10)).toString();
  return Promise.resolve(transactionId);
}
const callback = (error, transactionId) => {
  if (error === null && transactionId !== null) {
    console.log('Ваша книга: ', bookFND);
    console.log('transactionId: ', transactionId);
    console.log('Buying was successfull!');
  }
  else {
    console.error('Error: ', error);
  }
};
function buy(book, callback) {
  buyRequest()
    .then(id => callback(null, id))
    .catch(error => callback(error));
}
//_Попробуем купить Ф.Н.Достоевского "Преступление и наказание"
buy(bookFND, callback);
