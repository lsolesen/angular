'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:OnepointsixCtrl
 * @description
 * # OnepointsixCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('OnepointsixCtrl', function ($scope) {
    $scope.VO2Max = function(Min, Sek, Vaegt, Alder, Koen, Puls) {
      var Tid = Min*60 + Sek*1
  	  return Math.round((6.9652 + (0.020062 * Vaegt) - (0.0257 * Alder) + (0.5955 * Koen) - (0.003754 * Tid) - (0.0115 * Puls))* Math.pow(10,1))/Math.pow(10,1);
    }
    $scope.Kondital = function(VO2Max, Vaegt) {
      return Math.round((VO2Max / Vaegt * 1000) * Math.pow(10,2))/Math.pow(10,2);
    }
  });
