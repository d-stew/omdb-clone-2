app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
})
