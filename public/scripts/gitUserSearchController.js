githubUserSearch.controller('GitUserSearchController', ['Search', 'Repos', function(Search, Repos) {

  var self = this;

  self.doSearch = function() {
    if (self.searchTerm) {
      self.lastSearch = self.searchTerm;
      Search.query(self.searchTerm)
        .then(function(response) {
        self.searchResult = response.data;
        })
      Repos.query(self.searchTerm)
        .then(function(response) {
        self.repoResults = response.data;
        console.log(self.repoResults)
      })
    }
    if (self.searchTerm === '') {
      self.searchResult = null
      self.repoResults = null
    }
  };
}]);
