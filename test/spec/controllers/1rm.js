'use strict';

describe('Controller: OneRMCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var OneRMCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OneRMCtrl = $controller('OneRMCtrl', {
      $scope: scope
    });
  }));

  it('should calculate Brzycki correctly', function () {
    expect(scope.brzycki(82, 5)).toBe(92);
  });

  it('should calculate Epley correctly', function () {
    expect(scope.epley(82, 5)).toBe(96);
  });

  it('should calculate Lander correctly', function () {
    expect(scope.lander(82, 5)).toBe(93);
  });

  it('should calculate Lombardi correctly', function () {
    expect(scope.lombardi(82, 5)).toBe(96);
  });

  it('should calculate Mayhewetal correctly', function () {
    expect(scope.mayhewetal(82, 5)).toBe(98);
  });

  it('should calculate oconneretal correctly', function () {
    expect(scope.oconneretal(82, 5)).toBe(92);
  });

  it('should calculate wathan correctly', function () {
    expect(scope.wathan(82, 5)).toBe(96);
  });

});
