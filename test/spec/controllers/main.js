'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSkeletonApp'));

  var MainCtrl,
    rootScope,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $rootScope: rootScope
    });
    rootScope.aboutCount = 0;
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
