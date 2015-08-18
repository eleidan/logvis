App.Views.Dashboard = Backbone.View.extend({
  el: 'section',
  template: JST['templates/dashboard'],

  events: {
    // 'change select[name=teams]':          'onTeams',
  },

  initialize: function(options) {
    // this.teams = new App.Collections.Teams();
    this.teamID = 0;
    this.attributes = {role:''};

    // this.listenTo(this.teams,  'sync',  this.render);

    // this.teams.fetch();
    this.render();
  },

  render: function() {
    // this.attributes.teams = filteredTeams;
    //
    this.$el.html(this.template());
    // this.$('select[name=teams]').trigger('change');
    // this.updateUsersRequestsVisibility();
    // this.renderPersonalRequests();
    return this;
  },

  onTeams: function(e) {
    // this.teamID = parseInt(e.target.value);
    // this.attributes.role = App.currentUserRoles.roleFromTeamID(this.teamID);
    // this.updateUsersRequestsVisibility();
    // this.renderTimeTable();
  },
});
