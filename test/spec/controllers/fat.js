'use strict';

describe('Controller: FatCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var FatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FatCtrl = $controller('FatCtrl', {
      $scope: scope
    });
  }));

  it('should calculate BMI correctly', function () {
    expect(scope.BMI(82, 181)).toBe(25.029760996306585);
  });
  
  it('should calculate fat mass correctly for a man', function () {
    expect(scope.fatMass(25, 38, 82, 'man')).toBe(17.936);
  });

  it('should calculate fat mass correctly for a woman', function () {
    expect(scope.fatMass(25, 38, 82, 'woman')).toBe(26.300000000000004);
  });

  
  it('should calculate fat percent correctly', function () {
    expect(scope.fatPercent(25, 82)).toBe(30.48780487804878);
  });
});
