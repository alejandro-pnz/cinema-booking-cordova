/**
 * Created by alejandro on 16.02.15.
 */
angular.module('cinema.controllers', [])

    .controller('MenuCtrl', function($scope) {

        $scope.menuItems = [
            { title: 'Моя бронь', icon: "ion-pricetag", state: '#/app/booking' },
            { title: 'Расписание сеансов', icon: "ion-person-stalker", state: '#/app/timetable' },
            { title: 'Скоро на экранах', icon: "ion-card", state: '#/app/soon' },
            { title: 'Акции', icon: "ion-flame", state: '#/app/home' }
        ];

        $scope.mess  = function (msg) {
            alert(msg);
        }
    })

    .controller('TimetableCtrl', function($scope) {

        $scope.sessions = [
            { time: '16:20' },
            { time: '18:40' },
            { time: '19:40' },
            { time: '20:50' }
        ];
    })


    .controller('FilmsDetailCtrl', ['$scope', '$routeParams', '$http',
        function($scope, $routeParams, $http) {
            $http.get('data/films.json').success(function(data) {
                $scope.films = data;
            });
        }])

    .controller('HallCtrl', function($scope) {
            $scope.halls = [
                {title: 'Звездный', placeCount: 138, row: 10, column: 14},
                {title: 'Премьерный', placeCount: 138, row: 10, column: 14},
                {title: 'VIP', placeCount: 9, row: 3, column: 3},
            ];
    });