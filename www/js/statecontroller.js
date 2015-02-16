/**
 * Created by alejandro on 16.02.15.
 */
angular.module('cinema', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
// setup an abstract state for the tabs directive
        .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })
        // Each tab has its own nav history stack:
        .state('tab.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'templates/tab-home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('tab.changecity', {
            url: '/city',
            views: {
                'tab-cities': {
                    templateUrl: 'templates/tab-cities.html',
                    controller: 'LocationsCtrl'
                }
            }
        })
        .state('tab.settings', {
            url: '/settings',
            views: {
                'tab-settings': {
                    templateUrl: 'templates/tab-settings.html',
                    controller: 'SettingsCtrl'
                }
            }
        });
// if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');
});