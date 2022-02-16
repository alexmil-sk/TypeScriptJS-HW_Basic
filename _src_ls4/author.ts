import { Raitingable } from './raitingable.js';

export interface Author extends Raitingable {
  firstName: string,
  lastName: string,
  raiting: number,
}

export const myAuthor: Author = {
  firstName: 'Peter',
  lastName: 'Petrov',
  raiting: 4.3
}

export const FND: Author = {
  firstName: 'Федор',
  lastName: 'Достоевский',
  raiting: 5.0
}

