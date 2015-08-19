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
    var data = this.dataset.get('content');

    if (!_.isUndefined(this.stackedColumnChart)) {
      this.stackedColumnChart.remove();
      this.stackedColumnChart = undefined;
    }

    if (!_.isUndefined(this.lineChart)) {
      this.lineChart.remove();
      this.lineChart = undefined;
    }

    this.stackedColumnChart = new App.Views.StackedColumnChart({'data':data});
    this.lineChart = new App.Views.LineChart({'data':data});

    return this;
  }
});
