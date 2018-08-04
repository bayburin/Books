import data from '../../assets/data.json'

export function BookService() {
  const
    /**
     * Интерфейс - автор книги
     */
    authorI = {
      fName: null,
      sName: null
    },
    /**
     * Интерфейс - книга
     */
    BookI = {
      id: null,
      title: null,
      authors: [angular.copy(authorI)],
      pageCount: null,
      publishHouse: null,
      publishDate: null,
      releaseDate: null,
      isbn: null,
      image: ''
    };

  /**
   * Список книг
   */
  let bookList = data;

  /**
   * Вернуть список книг
   */
  this.getBooks = () => bookList;
}
