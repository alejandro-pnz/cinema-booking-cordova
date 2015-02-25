/**
 * Created by alejandro on 25.02.15.
 */
angular.module('cinema.controllers', [])

    .controller('TimetableCtrl', function($scope) {

        $scope.sessions = [
            { time: '16:20' },
            { time: '18:40' },
            { time: '19:40' },
            { time: '20:50' }
        ];
    });