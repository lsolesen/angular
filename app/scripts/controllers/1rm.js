'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:1rmCtrl
 * @description
 * # 1rmCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('OneRMCtrl', function ($scope) {
     $scope.brzycki = function(weight, repetitions) {
       return Math.round(weight*(36/(37-repetitions)));
     };
     $scope.epley = function(weight, repetitions) {
       return Math.round((1 + (0.0333*repetitions))*weight);
		 };
     $scope.lander = function(weight, repetitions) {
       return Math.round((100*weight)/(101.3 - 2.67123*repetitions));
		 };
     $scope.lombardi = function(weight, repetitions) {
       return Math.round(weight*(Math.pow(repetitions,0.1)));
		 };
     $scope.mayhewetal = function(weight, repetitions) {
       return Math.round((100*weight)/(52.2 + (41.9*Math.exp(-0.055*repetitions))));
		 };
     $scope.oconneretal = function(weight, repetitions) {
       return Math.round(weight*(1 + 0.025*repetitions));
     };
		 $scope.wathan = function(weight, repetitions) {
       return Math.round((100*weight)/(48.8 + (53.8*Math.exp(-0.075*repetitions))));
     };
  });
