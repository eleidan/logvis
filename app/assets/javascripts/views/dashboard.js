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

    console.log(this.filterStatus(data).sort);
    statuses = _.sortBy(this.filterStatus(data), function(i) {
      return i.date;
    });
    console.log(statuses);
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
  },

  filterStatus: function(data) {
    var result = {},
        isError = false,
        days = [],
        date = '';

    _.each(data, function(item) {
      date = item.created_at.slice(0,10);
      isError = item.summary_status === 'error';

      if (_.contains(days, date)) {

        if (isError) {
          result[date].fail += 1;
        } else {
          result[date].pass += 1;
        }

      } else {
        days.push(date);
        if (isError) {
          result[date] = {'pass':0, 'fail':1};
        } else {
          result[date] = {'pass':1, 'fail':0};
        }
      }
    });

    return result;
  }
});
