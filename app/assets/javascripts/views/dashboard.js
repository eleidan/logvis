App.Views.Dashboard = Backbone.View.extend({
  el: 'section',
  template: JST['templates/dashboard'],

  initialize: function(options) {
    this.dataset = options.model;
    this.listenTo(this.dataset, 'change', this.renderCharts);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.uploader = new App.Views.Uploader({model:this.dataset});
    this.uploader.render();

    return this;
  },

  renderCharts: function() {
    $('.passing-and-failing-builds').show();
    $('.build-time-vs-time').show();
  }
});
