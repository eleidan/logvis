App.Views.StackedColumnChart = Backbone.View.extend({
  el: '.stacked-column-chart',
  template: JST['templates/stacked_column_chart'],

  initialize: function(options) {
    this.data = options.data || {};
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
        type: 'column'
      },

      title: {
        text: 'passing and failing builds per day'
      },

      xAxis: {
        categories: _.pluck(dataset, 'date'),
        plotBands: App.Helpers.preparePlotBands(dataset)
      },

      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Number of builds'
        }
      },

      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y + '<br/>' +
            'Total: ' + this.point.stackTotal;
        }
      },

      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },

      series: [{
        name: 'pass',
        data: _.pluck(dataset,'pass'),
      }, {
        name: 'fail',
        data: _.pluck(dataset,'fail'),
      }]
    });

    return this;
  }
});
