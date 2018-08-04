BookController.$inject = ['$rootScope', 'BookService'];

export default function BookController($rootScope, BookService) {
  this.showBook = (book) => $rootScope.$emit('book:show', book);

  this.destroyBook = ($event) => {
    $event.stopPropagation();
    BookService.destroyBook(this.book);
    $rootScope.$emit('book:clear');
  }
}
