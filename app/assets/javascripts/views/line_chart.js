App.Views.LineChart = Backbone.View.extend({
  el: '.line-chart',
  template: JST['templates/line_chart'],

  initialize: function(options) {
    this.data = options.data;
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChart();

    return this;
  },

  renderChart: function() {
    var dataset = this.data;

    this.$('.well').highcharts({
      chart: {
        type: 'line'
      },

      title: {
        text: 'build time per day'
      },

      xAxis: {
        categories: _.keys(dataset)
      },

      yAxis: {
        title: {
          text: 'Overall build duration, seconds'
        },
        min: 0
      },

      tooltip: {
        valueSuffix: ' seconds'
      },

      series: [{
        name: 'duration',
        data: _.pluck(_.values(dataset),'time'),
      }]
    });

    return this;
  }
});
