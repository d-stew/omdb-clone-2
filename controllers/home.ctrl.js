angular.module("OmdbClone")
  .controller('HomeController', ["$scope", "$http", "movieService", function($scope, $http, movieService) {

  $scope.view = {};
  $scope.view.movies = movieService.posts;
  // $scope.view.singleMovie = movieServices.postById()

  $scope.getMovie = function(movieName) {
    $scope.movieName = "";
    movieService.getMovie(movieName).then(function(response){
      for (var i=0; i < response.Search.length; i++) {
        movieService.posts.push(response.Search[i])
      }
      console.log($scope.view.movies);
    })
  }

}]);
