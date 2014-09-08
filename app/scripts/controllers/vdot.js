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
      return 1 / (29.54 + 5.000663 * (VDOT * (0.59 + 0.41 * (0.73 - 0.65) / 0.35)) - 0.007546 * Math.pow(VDOT * (0.59 + 0.41 * (0.73 - 0.65) / 0.35), 2)) * 1609.344 * 60;
    }

    $scope.PaceM = function(Time, Distance) {
      return Time * Math.pow(26.21875 / (Distance / 1609.344), 1.06) / 26.21875 * 60;
    }

    $scope.PaceT = function(VDOT) {
      return 1 / (29.54 + 5.000663 * (VDOT * 0.88) - 0.007546 * Math.pow(VDOT * 0.88, 2)) * 1609.344 * 60;
    }

    $scope.PaceI = function(VDOT) {
      return 1 / (29.54 + 5.000663 * (VDOT * 0.98) - 0.007546 * Math.pow(VDOT * 0.98, 2)) * 1609.344 * 60;
    }

    $scope.PaceR = function(VDOT) {
      return 1 / (29.54 + 5.000663 * (VDOT * (1.03 + 0.1 * (VDOT - 30) / 55)) - 0.007546 * Math.pow(VDOT * (1.03 + 0.1 * (VDOT - 30) / 55), 2)) * 1609.344 * 60;
    }

    /* http://www.alpfitness.com/calculators/running_pace_zones_vdot.html */
    $scope.trainingPaces = function() {
      var Zones = [
        { Name: "E", DistFrom: 9, DistTo: 24, Pace: 0 },
        { Name: "M", DistFrom: 8, DistTo: 24, Pace: 0 },
        { Name: "T", DistFrom: 5, DistTo: 19, Pace: 0 },
        { Name: "I", DistFrom: 4, DistTo: 9, Pace: 0 },
        { Name: "R", DistFrom: 0, DistTo: 4, Pace: 0}];

      var Distances = [
        0.0621371192, 0.124274238, 0.186411358, 0.248548477,
        0.372822715, 0.497096954, 0.621371192, 0.745645431, 0.994193908,
        1, 3, 3.1, 4, 5, 6, 6.2, 7, 8, 9, 10, 11, 12, 13.1, 18.6, 26.2];

      var ZonesTable = document.getElementById("ZonesTable");
      for (var rowIndex = 1; rowIndex < ZonesTable.rows.length; rowIndex++) {
        for (var cellIndex = 1; cellIndex < ZonesTable.rows[rowIndex].cells.length; cellIndex++) {
          if (rowIndex == 1) {
            switch (Zones[cellIndex - 1].Name) {
              case "E":
                Zones[cellIndex - 1].Pace = 1 / (29.54 + 5.000663 * (VDOT * (0.59 + 0.41 * (0.73 - 0.65) / 0.35)) - 0.007546 * Math.pow(VDOT * (0.59 + 0.41 * (0.73 - 0.65) / 0.35), 2)) * 1609.344 * 60;
                break;
              case "M":
                Zones[cellIndex - 1].Pace = Time * Math.pow(26.21875 / (Distance / 1609.344), 1.06) / 26.21875 * 60;
                break;
              case "T":
                Zones[cellIndex - 1].Pace = 1 / (29.54 + 5.000663 * (VDOT * 0.88) - 0.007546 * Math.pow(VDOT * 0.88, 2)) * 1609.344 * 60;
                break;
              case "I":
                Zones[cellIndex - 1].Pace = 1 / (29.54 + 5.000663 * (VDOT * 0.98) - 0.007546 * Math.pow(VDOT * 0.98, 2)) * 1609.344 * 60;
                break;
              case "R":
                Zones[cellIndex - 1].Pace = 1 / (29.54 + 5.000663 * (VDOT * (1.03 + 0.1 * (VDOT - 30) / 55)) - 0.007546 * Math.pow(VDOT * (1.03 + 0.1 * (VDOT - 30) / 55), 2)) * 1609.344 * 60;
                break;
            }
            ZonesTable.rows[rowIndex].cells[cellIndex].innerHTML = SecondsToTimeString(Zones[cellIndex - 1].Pace);
          }
          else if (rowIndex - 2 >= Zones[cellIndex - 1].DistFrom && rowIndex - 2 <= Zones[cellIndex - 1].DistTo) {
            ZonesTable.rows[rowIndex].cells[cellIndex].innerHTML = SecondsToTimeString(Zones[cellIndex - 1].Pace * Distances[rowIndex - 2]);
          }
        }
      }
    };
  });

function SecondsToTimeString(Seconds) {

    if (Seconds == Infinity || isNaN(Seconds) || Seconds < 0)
        return "---";

    var Hours = parseInt(Seconds / 3600);
    Seconds = Seconds - Hours * 3600;

    var Minutes = parseInt(Seconds / 60);
    Seconds = parseInt(Seconds - Minutes * 60);

    return (Hours > 0 ? Hours + ":" : "") + (Minutes < 10 && Hours > 0 ? "0" : "") + Minutes + ":" + (Seconds < 10 ? "0" : "") + Seconds;
}
