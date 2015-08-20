App.Helpers.average = function(data){
  return data.reduce(function(sum, value){
    return sum + value;
  }, 0) / data.length;
};
