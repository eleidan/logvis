// https://en.wikipedia.org/wiki/Standard_deviation
App.Helpers.standardDeviation = function(values){
  var deviations  = 0.0,
      diff,
      mean        = 0.0,
      variance    = 0.0;

  mean = App.Helpers.average(values);

  deviations = values.map(function(value){
    diff = value - mean;
    return diff * diff;
  });

  variance = App.Helpers.average(deviations);

  return Math.sqrt(variance);
};
