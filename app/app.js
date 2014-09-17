'use strict';

/**
 * @ngdoc overview
 * @name angularSkeletonApp
 * @module angularSkeletonApp
 * @requires about
 * @requires main
 * @description
 *
 * Entry point of the application. It holds the main module. The dependency for th main module are ngAnimage, ngCookies, ngResources, ngRoute, ngSanitize, ngTouch, route-segment and view-segment. route-segment and view-segment are injected in order to attain multi level navigation in the application. This dependencies belong to the angular-route-segment module.
 *
 * This is file is responsible for
 *      > Initializing the application module
 *      > Bootstraping the application
 *      > Initialize the localization of module.
 *
 * Documentation Ref :
 *  Comment: https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation
 *  Grunt Config: https://www.npmjs.org/package/grunt-ngdocs
 * # angulaSkeletonApp
 */
var app = angular.module('angularSkeletonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'about',
  	'main'
  ]);

// Updating the language on Load
app.run(function (translationService,$rootScope,config) {
  document.querySelector('body').setAttribute('class', config.theme);
  $rootScope.config = config;
  $rootScope.currentTheme = config.theme;
  translationService.getTranslation(config.language).then(function(){
     //angular.bootstrap(document, ['angularSkeletonApp']);
     $rootScope.langLoaded = true;
  });;
});

// Handle app level change
app.controller('AppCtrl', function ($rootScope, translationService) {
  $rootScope.updateLocale = function (lang) {
    translationService.getTranslation(lang);
    return false;
  };
});

// Bootstrapping Application
angular.element(document).ready(function () {
  angular.bootstrap(document, ['angularSkeletonApp']);
});
