/**
 * Created by alejandro on 16.02.15.
 */
angular.module('cinema', ['ionic'])

    .controller('MenuCtrl', function($scope) {

        $scope.menuItems = [
            { title: 'Моя бронь', state: 'booking' },
            { title: 'Расписание сеансов', state: 'timetable' },
            { title: 'Скоро на экранах', state: 'soon' },
            { title: 'Акции', state: 'action' }
        ];

        $scope.mess  = function (msg) {
            alert(msg);
        }
    });
