angular.module('CommonDirectives', [])
.directive("welcome", function() {
  return {
    restrict: "E",
    template: "<div>Howdy there! You look splendid.</div>"
  }
});