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

  it('should calculate pace E correctly', function () {
    expect(scope.PaceE(52)).toBe(303.35058905107826);
  });

  it('should calculate pace M correctly', function () {
    expect(scope.PaceM(184, 42000)).toBe(255.52979381039034);
  });

  it('should calculate pace T correctly', function () {
    expect(scope.PaceT(52)).toBe(247.3521122211581);
  });

  it('should calculate pace I correctly', function () {
    expect(scope.PaceI(52)).toBe(226.60542914438477);
  });

  it('should calculate pace R correctly', function () {
    expect(scope.PaceR(52)).toBe(210.95866255674946);
  });

});
