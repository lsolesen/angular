'use strict';

/**
 * @ngdoc overview
 * @name workspaceApp
 * @description
 * # workspaceApp
 *
 * Main module of the application.
 */
angular
  .module('workspaceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/fat', {
        templateUrl: 'views/fat.html',
        controller: 'FatCtrl'
      })
      .when('/energy', {
        templateUrl: 'views/energy.html',
        controller: 'EnergyCtrl'
      })
      .when('/1rm', {
        templateUrl: 'views/1rm.html',
        controller: 'OneRMCtrl'
      })
      .when('/1point6', {
        templateUrl: 'views/1point6.html',
        controller: 'OnepointsixCtrl'
      })
      .when('/vdot', {
        templateUrl: 'views/vdot.html',
        controller: 'VdotCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var PhoneGapInit = function () {
  this.boot = function () {
    angular.bootstrap(document, ['workspaceApp']);
  };

  if (window.phonegap !== undefined) {
    document.addEventListener('deviceready', function() {
      this.boot();
    });
  } else {
    console.log('PhoneGap not found, booting Angular manually');
    this.boot();
  }
};

angular.element(document).ready(function() {
  new PhoneGapInit();
});