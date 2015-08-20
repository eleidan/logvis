// Get indexes of days with abnormals.
App.Helpers.abnormalDaysIndexes = function(data) {
  var result = [],
      deviation = App.Helpers.standardDeviation(data);

  _.each(data, function(element, index) {
    if (element > deviation) {
      result.push(index);
    }
  });

  return result;
};
