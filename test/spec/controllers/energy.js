'use strict';

describe('Controller: EnergyCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var EnergyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnergyCtrl = $controller('EnergyCtrl', {
      $scope: scope
    });
  }));

  it('should calculate energy consumption when values are entered', function () {
    expect(scope.energy(1000, 82)).toBe(344.40000000000003);
  });
});
