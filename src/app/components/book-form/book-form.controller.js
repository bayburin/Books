BookFormController.$inject = ['$state', '$stateParams', 'BookService'];

export default function BookFormController($state, $stateParams, BookService) {
  this.book = $stateParams.id ? BookService.getBook($stateParams.id) : BookService.initBook();

  this.addAuthor = ($event) => {
    $event.preventDefault();
    BookService.addAuthor();
  };

  this.destroyAuthor = ($event, index) => {
    $event.preventDefault();
    BookService.destroyAuthor(index);
  };

  this.saveData = (form) => {
    if (!form.$valid) {
      return false;
    }

    BookService.prepareReleaseDate();
    this.book.id ? BookService.updateBook() : BookService.addBook();
    $state.go('books');
  };
}
