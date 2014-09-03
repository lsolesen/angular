'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:EnergyCtrl
 * @description
 * # EnergyCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('EnergyCtrl', function ($scope) {
    $scope.energy = function(weight, distance) {
      var kcal = weight * distance / 1000;
      var kJ = 4.2 * kcal;
      return kJ;
    };
  });
