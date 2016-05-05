app.controller('HomeController', ["$scope", "$http", "movieService", function($scope, $http, movieService) {

  $scope.view = {};

  $scope.view.movies = movieService.posts;
  console.log(movieService.posts);

  // $http.get('http://www.omdbapi.com/?').then(function(data){
  //   $scope.view.chatData = data.data;
  // })
  // .catch(function (data) {
  //       console.log("Error: " + data)
  // });

}]);
