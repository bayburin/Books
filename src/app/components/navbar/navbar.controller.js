NavbarController.$inject = ['$rootScope', 'BookService'];

export default function NavbarController($rootScope, BookService) {
  this.filter = BookService.filter;

  this.selectFilter = () => BookService.rememberFilter();
}
