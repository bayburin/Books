import './assets/stylesheets/style.sass';
import 'jquery';
import 'bootstrap3/dist/js/bootstrap';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';

import routes from './app/app.routes';
import BookListComponent from './app/components/book-list/book-list.component';
import BookComponent from './app/components/book/book.component';
import BookDetailComponent from './app/components/book-detail/book-detail.component';
import BookFormComponent from './app/components/book-form/book-form.component';
import { BookService } from './app/services/book.service';
import ArrToStrFilter from './app/filters/arr-to-str.filter';

angular
  .module('books', [uiRouter, 'ngMessages'])
  .config(routes)
  .component('bookListComponent', BookListComponent)
  .component('bookComponent', BookComponent)
  .component('bookDetailComponent', BookDetailComponent)
  .component('bookFormComponent', BookFormComponent)
  .service('BookService', BookService)
  .filter('arrToStr', ArrToStrFilter);