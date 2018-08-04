BookController.$inject = ['$rootScope', 'BookService'];

export default function BookController($rootScope, BookService) {
  this.destroyBook = () => {
    BookService.destroyBook(this.book);
  }
}
