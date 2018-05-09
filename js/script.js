// script.js

// create the module and name it profileApp
// include ngRoute for all our routing
var profileApp = angular.module('profileApp', ['ngRoute']);

// router:
profileApp.config(function($routeProvider, $locationProvider) {
  $routeProvider

  // route for the home page
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'mainController'
    })

  // route for the arduino page
    .when('/arduino', {
      templateUrl: 'pages/arduino.html',
      controller: 'mainController'
    })

  // route for the design page
    .when('/design', {
      templateUrl: 'pages/design.html',
      controller: 'mainController'
    })

  // route for the games page
    .when('/games', {
      templateUrl: 'pages/games.html',
      controller: 'mainController'
    })

  // route for the intro page
    .when('/intro', {
      templateUrl: 'pages/intro.html',
      controller: 'mainController'
    })

  // route for the mvp page
    .when('/mvp', {
      templateUrl: 'pages/mvp.html',
      controller: 'mainController'
    })

  // route for the contact page
    .when('/contact', {
      templateUrl: 'pages/contact.html',
      controller: 'mainController'
    });
  // use the HTML5 History API
  $locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
profileApp.controller('mainController', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.goto = function(text) {
      console.log(text);
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(text);

      // call $anchorScroll()
      $anchorScroll();
    };
  }]);
