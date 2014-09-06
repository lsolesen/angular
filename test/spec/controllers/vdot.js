'use strict';

describe('Controller: VdotCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var VdotCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VdotCtrl = $controller('VdotCtrl', {
      $scope: scope
    });
  }));

  it('should calculate vdot correctly', function () {
    expect(scope.vdot(0, 19, 6, 5)).toBe(52.55786939315522);
  });
});
