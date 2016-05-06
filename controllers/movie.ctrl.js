angular.module("OmdbClone")
  .controller('MovieController', ["$scope", "$http", "$routeParams", "movieService",
  function($scope, $http, $routeParams, movieService) {

  $scope.view = {};
  $scope.view.getMovie = {};
  var imdbID = $routeParams.id;

  $scope.view.getMovie = movieService.getSingleMovie(imdbID).then(function(response){
      console.log(response)
      $scope.view.singleMovie = response;
      console.log($scope.view.singleMovie);
    });

}]);
