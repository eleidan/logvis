// Preprocess data to get them ready for charts.
// Create new dataset with the following properties:
// {
//   '2015-05-10': {
//     'pass': 3,
//     'fail': 1
//   },
//   '2015-05-11': {
//     'pass': 0,
//     'fail': 1
//   }
// }
//
App.Helpers.prepareData = function(data) {
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
};
