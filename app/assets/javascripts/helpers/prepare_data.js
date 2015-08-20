// Preprocess data to get them ready for charts.
// Create new dataset with the following properties:
// [
//   {
//     'date': '2015-05-10',
//     'pass': 3,
//     'fail': 1,
//     'time': 738
//   },
//   {
//     'date': '2015-05-11',
//     'pass': 0,
//     'fail': 1,
//     'time': 535
//   }
// ]
//
App.Helpers.prepareData = function(data) {
  var hash = {},
      isError = false,
      days = [],
      date = '',
      result = [];

  // Accumulate all the values and attach them to date
  _.each(data, function(item) {
    date = item.created_at.slice(0,10);
    isError = item.summary_status === 'error';

    if (_.contains(days, date)) {

      if (isError) {
        hash[date].fail += 1;
      } else {
        hash[date].pass += 1;
      }
      hash[date].time += parseFloat(item.duration);

    } else {
      days.push(date);
      if (isError) {
        hash[date] = {'pass':0, 'fail':1};
      } else {
        hash[date] = {'pass':1, 'fail':0};
      }
      hash[date].time = parseFloat(item.duration);
    }
  });

  // Compose records by injecting date
  result = _.map(hash, function(value, key) {
    value.date = key;
    return value;
  });

  return result;
};
