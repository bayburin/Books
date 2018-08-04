import './assets/stylesheets/style.sass';
import 'jquery';
import 'bootstrap3/dist/js/bootstrap';

import angular from 'angular';

import BookListComponent from './app/components/book-list/book-list.component';
import BookComponent from './app/components/book/book.component';
import BookDetailComponent from './app/components/book-detail/book-detail.component';
import { BookService } from './app/services/book.service';
import ArrToStrFilter from './app/filters/arr-to-str.filter';

angular
  .module('books', [])
  .component('bookListComponent', BookListComponent)
  .component('bookComponent', BookComponent)
  .component('bookDetailComponent', BookDetailComponent)
  .service('BookService', BookService)
  .filter('arrToStr', ArrToStrFilter);