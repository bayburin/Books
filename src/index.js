import './assets/stylesheets/style.sass';
import 'jquery';
import 'bootstrap3/dist/js/bootstrap';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import ngCookies from 'angular-cookies';

import routes from './app/app.routes';
import BookListComponent from './app/components/book-list/book-list.component';
import BookComponent from './app/components/book/book.component';
import BookDetailComponent from './app/components/book-detail/book-detail.component';
import BookFormComponent from './app/components/book-form/book-form.component';
import { BookService } from './app/services/book.service';
import ArrToStrFilter from './app/filters/arr-to-str.filter';
import IsbnValidator from './app/directives/isbn-validator.directive';
import FileUploadDirective from './app/directives/file-upload.directive';
import NavbarComponent from './app/components/navbar/navbar.component';

angular
  .module('books', [uiRouter, 'ngMessages', 'ngCookies'])
  .config(routes)
  .component('navbarComponent', NavbarComponent)
  .component('bookListComponent', BookListComponent)
  .component('bookComponent', BookComponent)
  .component('bookDetailComponent', BookDetailComponent)
  .component('bookFormComponent', BookFormComponent)
  .service('BookService', BookService)
  .filter('arrToStr', ArrToStrFilter)
  .directive('isbnValidator', IsbnValidator)
  .directive('fileUpload', FileUploadDirective);
