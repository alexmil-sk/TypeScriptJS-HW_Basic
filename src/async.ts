
//const bookNameRequest = Promise.resolve('promise is ...');
//
//bookNameRequest.then(name => { console.log(name) });



export interface BookResponse {
  kind: string,
  totalItems: number,
  items: Book[]
}

//_Структура книги======

export interface Book {
  id; string,
  kind: string,
  etag: string,
  volumeInfo: {
    title: string,
    authors: string[],
    description: string,
    publishedDate: string
  }
}


//export function getBookInfo(isbn: string) {
//  return fetch('https://api.sampleapis.com/countries/countries' + isbn)
//    .then(response => {
//      return response.text();
//    })
//    .then<BookResponse>(responseText => {
//      return JSON.parse(responseText);
//    })
//    .then(data => console.table(data))
//}
//
//getBookInfo('/100');

const a: Partial<Book> = {};


