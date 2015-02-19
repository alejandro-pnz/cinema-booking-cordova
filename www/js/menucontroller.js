/**
 * Created by alejandro on 16.02.15.
 */
angular.module('cinema', ['ionic'])

    .controller('MenuCtrl', function($scope) {

        $scope.menuItems = [
            { title: 'Моя бронь', state: 'templates/about.html' },
            { title: 'Расписание сеансов', state: 'templates/facts.html' },
            { title: 'Скоро на экранах', state: 'templates/about.html' },
            { title: 'Акции', state: 'templates/home.html' }
        ];

        $scope.mess  = function (msg) {
            alert(msg);
        }
    });
