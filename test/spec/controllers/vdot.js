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
    expect(scope.PaceE(52)).toBe(488.1954503858185);
  });

  it('should calculate pace M correctly', function () {
    expect(scope.PaceM(184, 42000)).toBe(423.1451455055189);
  });

  it('should calculate pace T correctly', function () {
    expect(scope.PaceT(52)).toBe(398.07463769044745);
  });

  it('should calculate pace I correctly', function () {
    expect(scope.PaceI(52)).toBe(364.6860877609408);
  });

  it('should calculate pace R correctly', function () {
    expect(scope.PaceR(52)).toBe(339.5050578337294);
  });

});
