// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('cinema', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('intro', {
            url: '/',
            templateUrl: 'templates/intro.html',
            controller: 'IntroCtrl'
        })
        .state( 'main', {
            url: '/',
            templateUrl: 'templates/main.html',
            controller: 'MainPageSlideCtrl'
        });

    $urlRouterProvider.otherwise( "/");
})

.controller('IntroCtrl', function($scope, $stateProvider, $ionicSlideBoxDelegate) {
    $scope.startApp = function() {
        $stateProvider.go( 'main');
    };

    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.slideChanged = function(index)
    {
        $scope.slideIndex = index;
    };
})