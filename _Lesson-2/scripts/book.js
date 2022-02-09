export class Book {
  constructor(name, author, genre, pageAmount, price, reviews) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.pageAmount = pageAmount;
    this.price = price ? price : null;
    this.reviews = reviews ? reviews : null;
  }
}
