import { Author } from './author.js';
import { Review } from './types.js';

export class Book {
  name: string;
  author: Author;
  genre: string;
  pageAmount: number;
  price: number | null;
  reviews: Review;

  constructor(
    name: string,
    author: Author,
    genre: string,
    pageAmount: number,
    price: number,
    reviews?: Review,
  ) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.pageAmount = pageAmount;
    this.price = price ? price : null;
    this.reviews = reviews ? reviews : null;
  }
}
