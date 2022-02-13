//!____страница модуля на GITHUB______https://github.com/smilledge/node-google-books-search


declare module 'google-books-search' {

  export type ISBN = 'ISBN_10' | 'ISBN_13' | 'ISSN' | 'OTHER';

  export type PrintType = 'BOOK' | 'MAGAZINE' | 'NEW_PRINT_TYPE' | string;

  export interface IindustryIdentifiers {
    type: ISBN,
    identifier: string
  }

  export type LanguageCode = 'en' | 'ru' | string;
  export type SearchField = 'title' | 'author' | string;


  export interface IBook {
    title: string,
    authors: string[],
    publishedDate: string,
    description: string,
    industryIdentifiers: IindustryIdentifiers[],
    pageCount: number,
    printType: PrintType,
  }

  export interface ISearchOptions {
    key?: string,
    field?: SearchField,
    offset?: number,
    limit?: number,
    lang?: LanguageCode,
  }

  export interface ICallback<R> {
    (error?: Error, result?: R)
  }


  export function search(query: string, options: ISearchOptions, callback: ICallback<IBook[]>): void;

  export function lookup(id: string, callback: ICallback<IBook>): void;

}

