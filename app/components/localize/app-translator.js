'use strict';
/**
 * @ngdoc service
 * @name angularSkeletonApp.translationService
 *
 * @description
 * This module is responsible for updating the language of the application
 *
 * Ref : http://blog.novanet.no/creating-multilingual-support-using-angularjs/
 */
app.service('translationService', [
  '$resource',
  '$rootScope', 
  '$q',
  function ($resource, $rootScope,$q) {
    /**
     * @ngdoc function 
     * @name angularSkeletonApp.translationService#getTranslation
     * @methodOf angularSkeletonApp.translationService
     *
     *
     * @description
     * Updated the language of the application based on the parameter passed. The language will be
     * updated to translation variable under $rootScope.
     *
     *
     * <pre>
     *
     *  app.controller('myController', function ($rootScope, translationService) {
     *    $rootScope.updateLocale = function (lang) {
     *      translationService.getTranslation(lang);
     *      return false;
     *    };
     *  });
     * </pre>
     *
     * When registering multiple languages for the same language key,
     * the actual translation gets overrided.
     *
     * Invoking this method with no arguments returns the language for 'en_US'
     *
     * @param {string} key A language key.
     *
     */
    var getTranslation = function (language) {
      var translationDeferred = $q.defer();
      language = language || 'en_US';
      var path = '/components/localize/lang_' + language + '.json';
      var ssid = 'lang_' + language;
      if (sessionStorage) {
        if (sessionStorage.getItem(ssid)) {
          $rootScope.translation = JSON.parse(sessionStorage.getItem(ssid));
          translationDeferred.resolve();
        } else {
          $resource(path).get(function (data) {
            $rootScope.translation = data;
            sessionStorage.setItem(ssid, JSON.stringify($rootScope.translation));
            translationDeferred.resolve();
          });
        }
      } else {
        $resource(path).get(function (data) {
          $rootScope.translation = data;
          translationDeferred.resolve();
        });
      }
      return translationDeferred.promise;
    };
    return {
      getTranslation: getTranslation
    };
}]);
