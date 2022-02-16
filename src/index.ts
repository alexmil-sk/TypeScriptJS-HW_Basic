import { Book } from './book.js';
import { Author } from './author.js';
import { reviewFND, Review } from './types.js';
import { FND } from './author.js';
import { Product } from './product.js';


const myNewAuthor: Author = {
  firstName: 'Вася',
  lastName: 'Васильев',
  rating: 5.9,
}

const myNewProduct = new Product(12);

  
const reviewBook_1: Review = ['давай Вася!!', 'жги Вася!!'];


const bookFND = new Book('Преступление и наказание', FND, 'триллер', 800, 2120, 5, reviewFND,);
const book_1 = new Book('Новая васина книга', myNewAuthor, 'триллер', 800, 2120, 12, reviewBook_1);


console.log(book_1 instanceof Author);
