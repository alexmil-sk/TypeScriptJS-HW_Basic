
class Book {
	name: string;
	genre: string;
	pageAmount: number;

	constructor(name:string, genre:string, pageAmount: number) {
		this.name = name
		this.genre = genre
		this.pageAmount = pageAmount
	}
}

const books = [
	new Book('Harry Potter', 'fantasy', 980),
	new Book('Lord of the Ring', 'fantasy', 1001),
	new Book('How to be productive', 'lifestyle', 500),
	new Book('Game of Thrones', 'fantasy', 999),
]



//function findSuitableBook(genre: string, pagesLimit: number):Book | undefined {
//	return books.find((book) => {
//		return book.genre === genre && book.pageAmount <= pagesLimit
//	})
//}

//const findSuitableBook = (genre:string, pageLimit:number):Book => {
//	return books.find((book) => {
//		return book.genre === genre && book.pageAmount <= pageLimit;
//	});
//}

function findSuitableBook(genre:string, pagesLimit:number, isMultiple = false): Book | Book[] | undefined {
	const findBook = (book: Book): boolean => {
		return book.genre === genre && book.pageAmount <= pagesLimit
	};

	//if(isMultiple) {
	//	return books.filter(findBook);
	//} else {
	//	return books.find(findBook);
	//}

	return isMultiple ? books.filter(findBook) : books.find(findBook);
}

console.log(findSuitableBook('fantasy', 2000, true));

