import { Author } from './author.js';
import { Review } from './types.js';
import { Raitingable } from './raitingable.js';
import { Product } from './product.js';

export class Book extends Product implements Raitingable {
  readonly name: string;
  readonly author: Author;
  readonly genre: string;
  readonly pageAmount: number;
  readonly reviews?: Review;
  private _rating: number;

  constructor(
    name: string,
    author: Author,
    genre: string,
    price: number,
    pageAmount: number,
    _rating: number,
    reviews?: Review,
  ) {
    super(price);
    this.name = name;
    this.author = author;
    this.genre = genre;
    this._price = price;
    this.pageAmount = pageAmount;
    this.reviews = reviews ? reviews : ['пусто', 'пусто'];
    this._rating = _rating;
  }

  get price(): number {
    return super.price * 0.5;
  }

  get rating(): number {
    return this._rating;
  }

  //if (this.reviews.length > 0) {
  //  const reviewSum = this.reviews.reduce(
  //    (accum, currentValue) => {
  //      return accum + currentValue[1]
  //    }, 0
  //  
  //  this.rating = reviewSum / this.reviews.length;
  //} else {
  //  this.rating = null;
  //}

}
