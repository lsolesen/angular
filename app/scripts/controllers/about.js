'use strict';


function Fatmass(BMI, age, weight, sex) {
  if (sex) {
    return 0.988 * BMI + 0.242 * weight + 0.094 * age - 30.18;
  } else {
    return 0.988 * BMI + 0.344 * weight + 0.094 * age - 30.18; 
  }
}

function Fatpercent(fm, weight) {
  return fm / weight * 100;
}

function BMI(w, h) {
  return w / (h * h);
}

/**
 * @ngdoc function
 * @name workspaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.BMI = function(w, h) {
      h = h / 100;
      return w / (h * h);
    };
    $scope.fat_mass = function(BMI, age, weight, sex) {
      if (sex == 'man') {
        return 0.988 * BMI + 0.242 * weight + 0.094 * age - 30.18;
      } else {
        return 0.988 * BMI + 0.344 * weight + 0.094 * age - 30.18; 
      }
    };
    $scope.fat_percent = function(fm, weight) {
      return fm / weight * 100;
    };
  });
