'use strict';

/**
 * @ngdoc overview
 * @module about
 * @name about
 * @requires base
 * @description
 * About is one of the main module defined in Applcation. This is injected as a dependency to the main application module.
 *
 * Components
 * {@link about.controller:AboutCtrl AboutCtrl}
 * {@link about.filter:aboutFilter AboutFilter}
 */
/**
 * @ngdoc controller
 * @name about.controller:AboutCtrl
 * @description
 *
 * One of the controller defined under the application module it takes care of the about view
 * # AboutCtrl
 */
angular.module('about',['base']).controller('AboutCtrl', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
    $rootScope.aboutCount = ++$rootScope.aboutCount || 0;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
}]);
