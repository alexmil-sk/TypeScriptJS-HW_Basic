import { Raitingable } from './raitingable.js';

export interface Author extends Raitingable {
  firstName: string,
  lastName: string,
  raiting: number,
}

export const myAuthor1: Author = {
  firstName: 'Peter',
  lastName: 'Petrov',
  raiting: 4.3
}
export const myAuthor2: Author = {
  firstName: 'Vasja',
  lastName: 'Vasiljev',
  raiting: 4.6
}
export const myAuthor3: Author = {
  firstName: 'Stanislav',
  lastName: 'Lem',
  raiting: 5.2
}

export const FMD: Author = {
  firstName: 'Федор',
  lastName: 'Достоевский',
  raiting: 5.0
}

