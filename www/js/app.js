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
        .state('menu', {
            url: "/menu",
            abstract: true,
            templateUrl: "menu"
        })
        .state('home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "home"
                }
            }
        })
        .state('booking', {
            url: '/',
            templateUrl: 'booking',
            controller: 'BookingCtrl'
        })
        .state( 'timetable', {
            url: '/timetable',
            views: {
                'menuContent' :{
                    templateUrl: "timetable"
                }
            }
        });

    $urlRouterProvider.otherwise( "/home");
})
