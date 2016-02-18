// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  
      // home page
      .when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainController'
      })
  
      // nerds page that will use the NerdController
      .when('/nerds', {
          templateUrl: 'views/nerd.html',
          controller: 'NerdController'
      })
      //pepole and the people controller
      .when('/people', {
        templateUrl: '../app/people/people.html',
        controller: 'PeopleController',
        controllerAs: 'PeopleCtrl'
      });
  
  $locationProvider.html5Mode(true);

}]);