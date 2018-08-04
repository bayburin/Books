import './assets/stylesheets/style.sass';
import 'jquery';
import 'bootstrap3/dist/js/bootstrap';

import angular from 'angular';

import BookListComponent from './app/components/book-list/book-list.component';
import { BookService } from './app/services/book.service';

angular
  .module('books', [])
  .component('bookListComponent', BookListComponent)
  .service('BookService', BookService);