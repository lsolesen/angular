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
    /* http://www.simpsonassociatesinc.com/runningmath1.htm */
    $scope.vdot = function(hours, minutes, seconds, distance) {
      // Convert time to mins and 100ths of mins
      var th = hours * 60;
      var tm = minutes * 1;
      var ts = seconds / 60;
      var time = th + tm + ts;

      // Calculate velocity im metres per min
      var d=distance*1000/time;

      // Calculate % max (drop dead formula)
      var p=0.8+(0.1894393*Math.exp(-0.012778*time))+(0.2989558*Math.exp(-0.1932605*time));

      // Calculate vo2 (oxygen cost)
      var v=-4.60+(0.182258*d)+(0.000104*d*d);

      // Calculate vo2 max
      return v/p;
    };

    $scope.PaceE = function(VDOT) {
      return 1 / (29.54 + 5.000663 * (VDOT * (0.59 + 0.41 * (0.73 - 0.65) / 0.35)) - 0.007546 * Math.pow(VDOT * (0.59 + 0.41 * (0.73 - 0.65) / 0.35), 2)) * 1000 * 60;
    };

    /**
     * @param Time     in minutes
     * @param Distance in meters 
     */
    $scope.PaceM = function(Time, Distance) {
      return Time * Math.pow(26.21875 / (Distance / 1000), 1.06) / 26.21875 * 60;
    };

    $scope.PaceT = function(VDOT) {
      return 1 / (29.54 + 5.000663 * (VDOT * 0.88) - 0.007546 * Math.pow(VDOT * 0.88, 2)) * 1000 * 60;
    };

    $scope.PaceI = function(VDOT) {
      return 1 / (29.54 + 5.000663 * (VDOT * 0.98) - 0.007546 * Math.pow(VDOT * 0.98, 2)) * 1000 * 60;
    };

    $scope.PaceR = function(VDOT) {
      return 1 / (29.54 + 5.000663 * (VDOT * (1.03 + 0.1 * (VDOT - 30) / 55)) - 0.007546 * Math.pow(VDOT * (1.03 + 0.1 * (VDOT - 30) / 55), 2)) * 1000 * 60;
    };

    $scope.secondsToTime = function(Seconds) {
      var Hours = parseInt(Seconds / 3600);
      Seconds = Seconds - Hours * 3600;

      var Minutes = parseInt(Seconds / 60);
      Seconds = parseInt(Seconds - Minutes * 60);

      return (Hours > 0 ? Hours + ':' : '') + (Minutes < 10 && Hours > 0 ? '0' : '') + Minutes + ':' + (Seconds < 10 ? '0' : '') + Seconds;
    };

    /* http://www.alpfitness.com/calculators/running_pace_zones_vdot.html */
  });
