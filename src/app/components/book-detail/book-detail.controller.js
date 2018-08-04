BookDetailController.$inject = ['$rootScope'];

export default function BookDetailController($rootScope) {
  $rootScope.$on('book:show', (event, data) => this.data = data);
  $rootScope.$on('book:clear', (event) => this.data = null);
}
