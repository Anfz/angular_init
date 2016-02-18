// public/js/controllers/people.controller.js
angular.module('PeopleCtrl', ['PeopleService']).controller('PeopleController', ['peopleDetails', function(peopleDetails) {
  var people = this; 
  
  people.tagline = 'fun with controller as ';
  
  
  function getPeople() {
    peopleDetails.getPeople()
      .success(function (result) {
          people.rec = result;
      })
      .error(function (error) {
          
      });
  }
  
  getPeople();
  
 
  people.debug = function (text) {
    console.log(text);
  }
  
}]);