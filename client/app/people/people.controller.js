// public/js/controllers/people.controller.js
angular.module('PeopleCtrl', ['PeopleService', 'CommonDirectives']).controller('PeopleController' ,[ 'peopleDetails', function( peopleDetails) {
  var people = this; 
  
  people.tagline = 'We love people';
  
  
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