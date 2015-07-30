githubUserSearch.factory('Repos', ['$http', function($http) {
  // var queryUrl = 'https://api.github.com/users/';

  return {
    query: function(searchTerm) {
      return $http({
        url: 'https://api.github.com/users/' + searchTerm + '/repos',
        method: 'GET',
        params: {
          // 'q': searchTerm + ''
        }
      });
    }
  }
}]);
