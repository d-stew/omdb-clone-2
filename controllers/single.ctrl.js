angular.module("OmdbClone")
  .controller('MovieController', ["$scope", "$http", "movieService", function($scope, $http, movieService) {

  $scope.vm = {};
  var movieId = req.params.id;
  console.log('Hello');
  console.log(movieId);
  // $scope.view.singleMovie = movieServices.postById()

  // $scope.getMovie = function(movieName) {
  //   movieService.getMovie(movieName).then(function(response){
  //     $scope.view.movies = movieService.addPost(response);
  //   })
  // }

}]);
