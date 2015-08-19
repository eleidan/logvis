App.Models.Dataset = Backbone.Model.extend({
  defaults: {
    data: {}
  },

  validate: function(attrs, options) {
    if (_.isEmpty(attrs.data)){
      return 'data is empty';
    }
  }
});
