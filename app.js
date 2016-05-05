angular.module("OmdbClone").config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/:id', {
      templateUrl: 'partials/movie.html',
      controller: 'MovieController'
    })
    .otherwise({
      redirectTo: '/'
    })
})
