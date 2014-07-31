'use strict';
describe('Router: angularSkeletonApp', function () {
  
  var $httpBackend;
  beforeEach(module('angularSkeletonApp'));
  beforeEach(inject(function (_$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', '/components/localize/lang_en.json').respond({
      'key': 'value'
    });
    $httpBackend.expectGET('modules/main/main.html').respond(200);
  }));
  it('should map routes to controllers', function () {
	
    inject(function ($route, $rootScope, $location) {
      expect($route.current).toBeUndefined();
      $location.path('/main');
	  $rootScope.$digest();
      expect($route.current.controller).toBe('MainCtrl');
      expect($route.routes['/main'].controller).toBe('MainCtrl');
      expect($route.routes['/main'].templateUrl).toBe('modules/main/main.html');
      
      expect($route.routes['/about'].controller).toBe('AboutCtrl');
      expect($route.routes['/about'].templateUrl).toBe('modules/about/about.html');
      
      expect($route.routes['/about/base'].controller).toBe('BaseCtrl');
      
      // otherwise redirect to
      expect($route.routes[null].redirectTo).toEqual('/main')
    });
  });
});