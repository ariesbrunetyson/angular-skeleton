/**
 * @ngdoc overview
 * @module main
 * @name main
 * 
 * @description
 * Main is one of the module defined in Applcation. This is injected as a dependency to the main application module.
 *
 * Inject the submodule as a dependency in main module
 *
 * Components
 * {@link main.controller:MainCtrl MainCtrl}
 * {@link  main.directive:mainDirective MainDirective}
 */
/**
 * @ngdoc controller
 * @name main.controller:MainCtrl
 * @description
 *
 * One of the controller defined under the main module it takes care of the main view.
 */
angular.module('main',[]).controller('MainCtrl', function ($scope) {
  'use strict';
  /**
   * @ngdoc property
   * @name awesomeThings
   * @propertyOf main.controller:MainCtrl
   *
   * @description
   * Holds an array of strings
   */
  $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
});
