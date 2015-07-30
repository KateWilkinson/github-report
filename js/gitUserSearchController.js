githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;

  self.doSearch = function() {
    if (self.searchTerm) {
    self.lastSearch = self.searchTerm;
    Search.query(self.searchTerm)
      .then(function(response) {
        console.log(response.data)
      self.searchResult = response.data;
      })
    }
    if (self.searchTerm === '') {
      self.searchResult = null
    }
  };
}]);
