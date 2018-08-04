BookListController.$inject = ['BookService'];

export default function BookListController(BookService) {
  this.filter = BookService.filter;

  let loadBooks = () => this.books = BookService.getBooks();

  if (BookService.getBooks()) {
    loadBooks();
  } else {
    BookService.loadBooks().then(() => loadBooks());
  }
}
