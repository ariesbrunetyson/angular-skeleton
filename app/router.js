/**
 * @ngdoc overview
 * @name angularSkeletonApp.router:Router
 * @description
 * # Router
 *
 * Router configuration of the application. All the routings are done using the route segment component of Angular.
 * Ref : http://angular-route-segment.com/
 */
app.config(function ($routeSegmentProvider, $routeProvider) {
  'use strict';
  $routeSegmentProvider.when('/main', 'main').
  when('/about', 'about').
  when('/about/base', 'about.base').
  segment('main', {
    templateUrl: 'modules/main/main.html',
    controller: 'MainCtrl'
  }).
  segment('about', {
    templateUrl: 'modules/about/about.html',
    controller: 'AboutCtrl'
  }).
  within().segment('base', {
    templateUrl: 'modules/about/base/base.html',
    controller: 'BaseCtrl',
  });
  $routeProvider.otherwise({
    redirectTo: '/main'
  });
});
