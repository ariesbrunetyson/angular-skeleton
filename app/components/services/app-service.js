'use strict';

/**
 * @ngdoc service
 * @name angularSkeletonApp.service:appService
 * @description
 * App level service used accross the application.
 *
 * Ref : https://docs.angularjs.org/guide/services
 * # appService
 */
app.service('appService', function () {
  // App level service should go here
});
app.factory('access', function ($http) {

    var userRole = ["ROLE_USER"]; // obtained from backend
    var userRoleMap = {
        'ROLE_ADMIN': [ '/main', '/about', '/base' ],
        'ROLE_USER': [ '/main', '/about']
    };

    return {

        userHasRole: function (role) {
            for (var j = 0; j < userRole.length; j++) {
                if (role == userRole[j]) {
                    return true;
                }
            }
            return false;
        },

        isUrlAccessibleForUser: function (route) {
            for (var i = 0; i < userRole.length; i++) {
                var role = userRole[i];
                var validUrlsForRole = userRoleMap[role];
                if (validUrlsForRole) {
                    for (var j = 0; j < validUrlsForRole.length; j++) {
                        if (validUrlsForRole[j] == route)
                            return true;
                    }
                }
            }
            return false;
        }
    };
});
