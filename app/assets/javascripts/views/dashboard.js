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
    var data = $.csv.toObjects(this.dataset.get('content')),
        statuses = [];

    statuses = App.Helpers.prepareData(data);
    $('.passing-and-failing-builds').show();
    $('.build-time-vs-time').show();
    $('.passing-and-failing-builds .panel-body').highcharts({

        chart: {
            type: 'column'
        },

        title: {
            text: 'passing and failing builds per day'
        },

        xAxis: {
            categories: _.keys(statuses)
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
            data: _.pluck(_.values(statuses),'pass'),
        }, {
            name: 'fail',
            data: _.pluck(_.values(statuses),'fail'),
        }]
    });
  }
});
