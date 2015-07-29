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
      self.searchResult = { items: [
      {
        "login": "oi you!",
        "avatar_url": "http://cf.juggle-images.com/matte/white/280x280/batman-19-logo-primary.jpg",
        "html_url": "https://google.com/"
      }] };
    }
  };
}]);
