import data from '../../assets/data.json'

export function BookService() {

  const
    /**
     * Стандартное изображение книги
     */
    NO_IMAGE_NAME = 'data:image/png;base64,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',
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
      image: NO_IMAGE_NAME
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
