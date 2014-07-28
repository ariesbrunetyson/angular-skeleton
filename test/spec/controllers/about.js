'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSkeletonApp'));

  var AboutCtrl,
    scope,
    rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    rootScope.aboutCount = 0;
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope,
      $rootScope: rootScope
    });

  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
  it('should increase the view count on loading controller', function () {
    expect(rootScope.aboutCount).toBe(1);
  });
});
