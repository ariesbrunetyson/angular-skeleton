/**
 * @ngdoc overview
 * @name angularSkeletonApp.router:Router
 * @description
 * # Router
 *
 * Router configuration of the application.
 */
app.config(function ($routeProvider) {
  'use strict';
  $routeProvider.when('/main', {
    templateUrl: 'modules/main/main.html',
    controller: 'MainCtrl'
  }).when('/about', {
    templateUrl: 'modules/about/about.html',
    controller: 'AboutCtrl'
  }).when('/about/base', {
    templateUrl: 'modules/about/base/base.html',
    controller: 'BaseCtrl',
  }).otherwise({
    redirectTo: '/main'
  });
});
