App.Views.Uploader = Backbone.View.extend({
  el: '.uploader',
  template: JST['templates/uploader'],

  events: {
    'change input[name=file]':  'onFileChange',
  },

  initialize: function(options) {
    var that = this;
    this.model = options.model;
    this.reader = new FileReader();

    this.reader.onload = function(event) {
      that.model.set('content', event.target.result);
    };

    this.reader.onerror = function(event) {
      alert('Failed to load file content!');
    };
  },

  render: function() {
    this.$el.html(this.template());

    return this;
  },

  onFileChange: function(event) {
    var file = event.target.files[0];

    if (file.size > FILE_SIZE_LIMIT) {
      alert('File is too big!');
    } else if (file.type !== 'text/csv'){
      alert('Only files of type text/csv are allowed!');
    } else {
      this.reader.readAsText(file);
    }
  }
});
