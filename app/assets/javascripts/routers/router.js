App.Router = Backbone.Router.extend({
  routes: {
    'dashboard':              'dashboard',
  },

  dashboard: function() {
    $('section').html("Dashboard =)");
    App.dashboard = new App.Views.Dashboard();
  }

  // teams: function() {
  //   $('.content').html("You should see the list for Teams... that's all I can tell you, dude O_O");
  //   var collection = new App.Collections.Teams();
  //   App.teams = new App.Views.Teams({'collection':collection});
  //   collection.fetch();
  // },
});
