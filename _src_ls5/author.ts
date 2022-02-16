import { Raitingable } from './raitingable.js';

export interface Author extends Raitingable {
  firstName: string,
  lastName: string,
  rating: number,
}

export const myAuthor: Author = {
  firstName: 'Peter',
  lastName: 'Petrov',
  rating: 4.3
}

export const FND: Author = {
  firstName: 'Федор',
  lastName: 'Достоевский',
  rating: 5.0
}

