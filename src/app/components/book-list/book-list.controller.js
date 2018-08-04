BookListController.$inject = ['BookService'];

export default function BookListController(BookService) {
  let loadBooks = () => this.books = BookService.getBooks();

  if (BookService.getBooks()) {
    loadBooks();
  } else {
    BookService.loadBooks().then(() => loadBooks());
  }
}
