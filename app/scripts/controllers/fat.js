'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('FatCtrl', function ($scope) {

    $scope.BMI = function(w, h) {
      h = h / 100;
      return w / (h * h);
    };

    $scope.fatMass = function(BMI, age, weight, sex) {
      if (sex === 'man') {
        return 0.988 * BMI + 0.242 * weight + 0.094 * age - 30.18;
      } else {
        return 0.988 * BMI + 0.344 * weight + 0.094 * age - 30.18; 
      }
    };
    $scope.fatPercent = function(fm, weight) {
      return fm / weight * 100;
    };
  });
