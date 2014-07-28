'use strict';
describe('Service: translationService', function () {
  var $httpBackend;
  beforeEach(module('angularSkeletonApp'));
  //beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
  beforeEach(inject(function (_$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', '/components/localize/lang_en.json').respond({
      'key': 'value'
    });
    //    $httpBackend.expectGET('/components/localize/lang_en.json').respond(200, {
    //      "key": "value"
    //    });
  }));
  it('should contain a translationService', inject(function (translationService) {
    expect(translationService).not.toEqual(null);
    expect(translationService.hasOwnProperty('getTranslation')).toBe(true);
    expect(angular.isFunction(translationService.getTranslation)).toBe(true);
  }));


  it('should update JSON to sessionStorage', inject(function ($httpBackend, translationService) {
    $httpBackend.expectGET('/components/localize/lang_en.json');
    //    .respond(200, {
    //      "key": "value"
    //    });
    translationService.getTranslation('en');
    $httpBackend.flush();
    expect(sessionStorage.lang_en).not.toBe(undefined);
  }));
});
