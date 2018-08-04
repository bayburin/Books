import BookController from './book.controller';

export default {
  template: require('text-loader!./book.template.html'),
  controller: BookController,
  bindings: {
    book: '='
  }
}
