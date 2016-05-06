angular.module('OmdbClone')
  .factory('movieService', ['$http','$q', function($http,$q) {
    var MOVIE_API = 'https://g-omdbapi.herokuapp.com';

    var movies = [
      {
        "id": 1,
        "favorite": false,
        // "date": moment( new Date().getTime() - 285678 ).fromNow(),
        "votes": 5,
        "comments": [],
        "Title": "The Matrix",
        "Year": "1999",
        "Rated": "R",
        "Released": "31 Mar 1999",
        "Runtime": "136 min",
        "Genre": "Action, Sci-Fi",
        "Director": "Lana Wachowski, Lilly Wachowski",
        "Writer": "Lilly Wachowski, Lana Wachowski",
        "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
        "Plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "Language": "English",
        "Country": "USA, Australia",
        "Awards": "Won 4 Oscars. Another 33 wins & 44 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX300.jpg",
        "Metascore": "73",
        "imdbRating": "8.7",
        "imdbVotes": "1,185,648",
        "imdbID": "tt0133093",
        "Type": "movie",
        "Response": "True"
      }
    ];

    var movieService = {
      posts: movies,
      postById: function(postId) {
        return this.posts.filter(function(post) {
          return post.id === +postId;
        }).pop();
      },
      getMovie: function(movieName) {
        var deferred = $q.defer();
        var movie = movieName.split(' ').join('+');

        $http.get(MOVIE_API+'/?s='+movie+'&y=&plot=long&r=json')
          .success(function(response){
            deferred.resolve(response);
          }).error(function(errah){
            deferred.reject(errah);
        })
        return deferred.promise;
      },
      addPost: function (post) {
          var posts = this.posts,
              postId = posts.length+1;
              post['id'] = postId;

          // Insert and Return Posts
          this.posts.push(post);
          return this.posts;
      }
    };

    return movieService;
  }]);
