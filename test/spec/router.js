'use strict';
/*describe('Router: angularSkeletonApp', function () {
  
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

    inject(function ($route, $routeSegment, $rootScope, $location) {

      expect($route.current).toBeUndefined();
      $location.path('/main');
	  $rootScope.$digest();
      expect($route.current.segment).toBe('main');
      expect($route.routes['/main'].segment).toBe('main');
      expect($route.routes['/main'].originalPath).toBe('/main');
      
      expect($route.routes['/about'].segment).toBe('about');
      expect($route.routes['/about'].originalPath).toBe('/about');
      
      expect($route.routes['/about/base'].segment).toBe('about.base');
      
      // otherwise redirect to
      expect($route.routes[null].redirectTo).toEqual('/main')
    });
  });
});
*/