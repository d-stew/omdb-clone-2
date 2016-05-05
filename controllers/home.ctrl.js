angular.module("OmdbClone")
  .controller('HomeController', ["$scope", "$http", "movieService", function($scope, $http, movieService) {

  $scope.view = {};
  $scope.view.movies = movieService.posts;
  // $scope.view.singleMovie = movieServices.postById()

  $scope.getMovie = function(movieName) {
    movieService.getMovie(movieName).then(function(response){
      $scope.view.movies = movieService.addPost(response);
    })
  }

}]);
