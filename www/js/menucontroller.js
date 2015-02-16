/**
 * Created by alejandro on 16.02.15.
 */
angular.module('cinema', ['ionic'])

    .controller('MenuCtrl', function($scope) {
        $scope.menuItems = [
            { title: 'Моя бронь' },
            { title: 'Расписание сеансов' },
            { title: 'Скоро на экранах' },
            { title: 'Акции' }
        ];
    });
