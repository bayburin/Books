import './assets/stylesheets/style.sass';
import 'jquery';
import 'bootstrap3/dist/js/bootstrap';

import angular from 'angular';

import BookListComponent from './app/components/book-list/book-list.component';
import BookComponent from './app/components/book/book.component';
import { BookService } from './app/services/book.service';

angular
  .module('books', [])
  .component('bookListComponent', BookListComponent)
  .component('bookComponent', BookComponent)
  .service('BookService', BookService);