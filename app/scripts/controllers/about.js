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
    var weight, height;
    $scope.BMI = BMI(weight, height);
    $scope.fm = Fatmass($scope.BMI, $scope.age, $scope.weight, $scope.sex);
    $scope.fp = Fatpercent($scope.fm, $scope.weight);
  });
