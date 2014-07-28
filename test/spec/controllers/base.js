'use strict';

describe('Controller: BaseCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSkeletonApp'));

  var AngularCtrl,
    scope,
    rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    AngularCtrl = $controller('BaseCtrl', {
      $scope: scope,
      $rootScope: rootScope
    });
    rootScope.aboutCount = 0;
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
  it('should invoke the updateViewCount event on call', function () {
    spyOn(scope, 'updateViewCount');
    scope.updateViewCount();
    expect(scope.updateViewCount).toHaveBeenCalled();
  });
  it('should update localCount and rootScope count on updateViewCount event', function () {
    expect(scope.localCount).toBe(0);
    scope.updateViewCount();
    expect(scope.localCount).toBe(1);
    scope.updateViewCount();
    expect(rootScope.aboutCount).toBe(1);
  });
});
