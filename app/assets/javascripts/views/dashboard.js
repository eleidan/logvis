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
    console.log(data);

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
          categories: _.keys(data)
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
          data: _.pluck(_.values(data),'pass'),
      }, {
          name: 'fail',
          data: _.pluck(_.values(data),'fail'),
      }]
    });

    $('.build-time-vs-time .panel-body').highcharts({
      chart: {
        type: 'line'
      },

      title: {
        text: 'build time per day'
      },

      xAxis: {
        categories: _.keys(data)
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
        data: _.pluck(_.values(data),'time'),
      }]
    });
  }
});
/*
title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
*/
