'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:VdotCtrl
 * @description
 * # VdotCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('VdotCtrl', function ($scope) {
    $scope.vdot = function(hours, minutes, seconds, distance) {
      // Convert time to mins and 100ths of mins
      var th = hours*60;
      var tm = minutes * 1;
      var ts = seconds /60;
      var time = th+tm+ts;

      // Calculate velocity im metres per min
      var d=eval(distance*1000/time);

      // Calculate % max (drop dead formula)
      var p=0.8+(0.1894393*Math.exp(-0.012778*time))+(0.2989558*Math.exp(-0.1932605*time));

      // Calculate vo2 (oxygen cost)
      var v=-4.60+(0.182258*d)+(0.000104*d*d);

      // Calculate vo2 max
      return v/p;
    };
  });
