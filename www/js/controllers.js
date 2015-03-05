/**
 * Created by alejandro on 16.02.15.
 */
angular.module('cinema.controllers', [])

    .controller('MenuCtrl', function($scope) {

        $scope.menuItems = [
            { title: 'Моё бронирование', icon: "ion-pricetag", state: '#/app/lk' },
            { title: 'Расписание сеансов', icon: "ion-calendar", state: '#/app/timetable' },
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
    })

    .controller('SoonCtrl', function($scope, $cordovaToast) {

        $scope.showToast = function(message, duration, location) {
            $cordovaToast.show(message, duration, location).then(function(success) {
                console.log("The toast was shown");
            }, function (error) {
                console.log("The toast was not shown due to " + error);
            });
        }

    });