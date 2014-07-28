'use strict';
/**
 * @ngdoc overview
 * @module base
 * @name base
 * 
 * @description
 * Base is one of the main module defined in Applcation. This is injected as a dependency to the main application module.
 *
 * Components
 * {@link base.controller:BaseCtrl BaseCtrl}
 * {@link base.service:baseService BaseService}
 */
/**
 * @ngdoc controller
 * @name base.controller:BaseCtrl
 * @description
 *
 * One of the controller defined under the application module it takes care of the base view
 * # AboutCtrl
 */
angular.module('base',[]).controller('BaseCtrl', ['$scope', '$rootScope',
                               function ($scope, $rootScope) {
      
   /**
    * @ngdoc property
    * @name localCount
    * @propertyOf base.controller:BaseCtrl
    *
    * @description
    * Keep track of the count of the click event
    */
    $scope.localCount = 0;
   /**
    * @ngdoc property
    * @name awesomeThings
    * @propertyOf base.controller:BaseCtrl
    *
    * @description
    * Holds an array of strings
    */
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    /**
     * @ngdoc function
     * @name base.updateViewCount
     * @methodOf base.controller:BaseCtrl
     * @description
     * Update the local scope count as well global scope couter.
     * @returns {false} to stop the event propagation in anchor
     */
    $scope.updateViewCount = function () {
      $scope.localCount++;
      if ($scope.localCount % 2 === 0) {
        $rootScope.aboutCount++;
      }
      return false;
    };
}]);
