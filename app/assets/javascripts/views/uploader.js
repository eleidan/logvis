App.Views.Uploader = Backbone.View.extend({
  el: '.uploader',
  template: JST['templates/uploader'],

  events: {
    'change input[name=file]':  'onFileChange',
  },

  initialize: function(options) {
    var that = this;
    this.model = options.model;

    this.listenTo(this.model, 'invalid', this.showError);

    this.reader = new FileReader();

    this.reader.onload = function(event) {
      var rawData = $.csv.toObjects(event.target.result),
          data    = App.Helpers.prepareData(rawData);

      that.model.set('data', data, {validate: true});
    };

    this.reader.onerror = function(event) {
      alert('Failed to load file content!');
    };
  },

  render: function() {
    this.$el.html(this.template());

    return this;
  },

  showError: function(event) {
    alert('Failed to load data.\nWrong logs?');
  },

  onFileChange: function(event) {
    var file = event.target.files[0];

    if (file.size > FILE_SIZE_LIMIT) {
      alert('File is too big!');
    } else {
      this.reader.readAsText(file);
    }
  }
});
