// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('cinema', ['ionic', 'cinema.controllers'])

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
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html"
        })
        .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html"
                }
            }
        })
        .state('app.booking', {
            url: "/booking",
            views: {
                'menuContent': {
                    templateUrl: "templates/booking.html"
                    //controller: 'PlaylistsCtrl'
                }
            }
        })
        .state( 'app.timetable', {
            url: '/timetable',
            views: {
                'menuContent' :{
                    templateUrl: "templates/timetable.html"
                }
            }
        })
        .state( 'app.soon', {
            url: '/soon',
            views: {
                'menuContent' :{
                    templateUrl: "templates/soon.html"
                }
            }
        });

    $urlRouterProvider.otherwise( "/app/home");
})
