App.Router = Backbone.Router.extend({
  routes: {
    'dashboard':              'dashboard',
  },

  dashboard: function() {
    $('section').html("Dashboard =)");
    dataset = new Backbone.Model();
    App.dashboard = new App.Views.Dashboard({model:dataset});
  }
});
