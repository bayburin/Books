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
   * Выбранная для редактирования/создания книга
   */
  let editBook = null;

  /**
   * Вернуть id для создаваемой книги
   */
  let generateBookId = () => {
    let maxId = 0;

    bookList.forEach((el) => {
      if (el.id > maxId) {
        maxId = el.id;
      }
    });

    return ++maxId;
  };

  /**
   * Вернуть список книг
   */
  this.getBooks = () => bookList;

  /**
   * Вернуть новый экземпляр книги
   */
  this.initBook = () => {
    editBook = angular.copy(BookI);
    return editBook;
  };

  /**
   * Вернуть запрашиваемую книгу
   */
  this.getBook = (bookId) => {
    editBook = angular.copy(bookList.find((el) => el.id == bookId));
    editBook.releaseDate = new Date(editBook.releaseDate);
    return editBook;
  };

  /**
   * Удалить книгу
   */
  this.destroyBook = (book) => {
    let index = bookList.findIndex((el) => el == book);
    bookList.splice(index, 1);
  };

  /**
   * Добавить автора
   */
  this.addAuthor = () => editBook.authors.push(angular.copy(authorI));

  /**
   * Удалить автора
   */
  this.destroyAuthor = (index) => editBook.authors.splice(index, 1);

  /**
   * Добавить книгу
   */
  this.addBook = () => {
    editBook.id = generateBookId();
    bookList.push(editBook);
  };

  /**
   * Обновить данные книги
   */
  this.updateBook = () => {
    let book = bookList.find((el) => el.id == editBook.id);
    angular.extend(book, editBook);
  };
}
