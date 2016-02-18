angular.module('PeopleService', [])
.factory('peopleDetails', function($http) {

  var getPeople = function() {
    return $http.get('/api/people');
  };
  
  return { 'getPeople' : getPeople};

});