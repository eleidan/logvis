// Generate array of Highcharts plotBand related objects.
// Create new dataset with the following properties:
// [
//   {
//     'color': '#FCFFC5',
//     'from': 1.5,
//     'to': 2.5,
//   },
//   {
//     'color': '#FCFFC5',
//     'from': 5.5,
//     'to': 6.5,
//   }
// ]
//
// The 'color' parameter may contain value in format that Highcharts supports.
App.Helpers.preparePlotBands = function(data, color) {
  var result = [],
      theColor  = color || '#faa',
      indexes   = App.Helpers.abnormalDaysIndexes(_.pluck(data, 'fail'));

  _.each(indexes, function(index) {
    result.push({
      'color':  theColor,
      'from':   (index - 0.5),
      'to':     (index + 0.5),
    });
  });

  return result;
};
