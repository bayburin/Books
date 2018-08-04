routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('books', {
    url: '/books',
    component: 'bookListComponent'
  })
  .state('newBook', {
    url: '/books/new',
    component: 'bookFormComponent'
  })
  .state('editBook', {
    url: '/books/:id',
    component: 'bookFormComponent'
  });
  $urlRouterProvider.otherwise('/books');
}