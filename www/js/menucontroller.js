/**
 * Created by alejandro on 16.02.15.
 */
angular.module('cinema.controllers', [])

    .controller('MenuCtrl', function($scope) {

        $scope.menuItems = [
            { title: 'Моя бронь', state: '#/app/booking' },
            { title: 'Расписание сеансов', state: '#/app/timetable' },
            { title: 'Скоро на экранах', state: '#/app/soon' },
            { title: 'Акции', state: '#/app/home' }
        ];

        $scope.mess  = function (msg) {
            alert(msg);
        }
    });
