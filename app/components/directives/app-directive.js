'use strict';

/**
 * @ngdoc directive
 * @name angularSkeletonApp.directive:userAccess
 * @description
 * App level Directives used accross the application.
 *
 * Ref : https://docs.angularjs.org/guide/directive
 * # userAccess
 */
app.directive('userAccess', ['access', 'removeElement', function (access, removeElement) {
    return{
        restrict: 'A',
        link: function (scope, element, attributes) {
            var hasAccess = false;
            var allowedAccess = attributes.userAccess.split(" ");
            for (var i = 0; i < allowedAccess.length; i++) {
                if (access.userHasRole(allowedAccess[i])) {
                    hasAccess = true;
                    break;
                }
            }

            if (!hasAccess) {
                angular.forEach(element.children(), function (child) {
                    removeElement(child);
                });
                removeElement(element);
            }
        }
    }
}]).constant('removeElement', function(element){
    element && element.remove && element.remove();
});
