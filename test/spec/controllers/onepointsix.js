'use strict';

describe('Controller: OnepointsixCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var OnepointsixCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OnepointsixCtrl = $controller('OnepointsixCtrl', {
      $scope: scope
    });
  }));

  it('should calculate VO2Max correctly', function () {
    expect(scope.VO2Max(17, 1, 82, 38, 1, 120)).toBe(3);
  });
  
  it('should calculate Kondital correctly', function () {
    expect(scope.Kondital(3, 82)).toBe(36.59);
  });
});
