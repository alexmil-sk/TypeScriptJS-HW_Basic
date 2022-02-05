
class Book {
	constructor(name, genre, pageAmount) {
		this.name = name
		this.genre = genre
		this.pageAmount = pageAmount
	}
}

const books = [
	new Book('Harry Potter', 'fantasy', 980),
	new Book('Lord of the Ring', 'fantasy', 1001),
	new Book('How to be productive', 'lifestyle', 500),
	new Book('Game of Thrones', 'fantasy', 999)
]

/**
 * Функция поиска книг
 * @param {string} genre жанр книги
 * @param {number} pagesLimit количество страниц в книге
 * @param {boolean} isMultiple возможность отображения нескольких найденных книг
 * @returns {Book | undefined} первую соответствующую книгу
 */
function findSuitableBook(genre, pagesLimit, isMultiple) {
	const findBook = (book) => {
		return book.genre === genre && book.pageAmount <= pagesLimit
	};

	//if(isMultiple) {
	//	return books.filter(findBook);
	//} else {
	//	return books.find(findBook);
	//}

	return isMultiple ? books.filter(findBook) : books.find(findBook);
}

console.log('findSuitableBook', findSuitableBook('fantasy', 2000));
