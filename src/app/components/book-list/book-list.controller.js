BookListController.$inject = ['BookService'];

export default function BookListController(BookService) {
  this.filter = BookService.filter;

  if (!BookService.getBooks()) {
    BookService.initDefaultBooks();
  }
  this.books = BookService.getBooks();
}
