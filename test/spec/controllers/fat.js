'use strict';

describe('Controller: FatctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var FatctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FatctrlCtrl = $controller('FatctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
