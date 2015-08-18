describe('Uploader view', function() {
  beforeEach(function() {
    setFixtures('<div class="uploader"></div>');
    dataset = new Backbone.Model();
    this.view = new App.Views.Uploader({model:dataset});

    this.view.render();
    this.container = $('.uploader');
  });

  afterEach(function() {
    this.view.remove();
  });


  it('returns the view object', function() {
    expect(this.view.render()).toEqual(this.view);
  });

  it('produces the correct HTML', function() {
    expect(this.container.find('.panel-heading')).toHaveText('File uploader');
    expect(this.container.find('.panel-body')).toContainElement('input[name=file]');
  });

  describe('responds to jQuery event', function() {
    it('change input[name=file]', function() {
      this.inputField = this.container.find('input[name=file]');

      spyOn(this.view, 'onFileChange');
      this.view.delegateEvents();
      this.inputField.trigger('change');

      expect(this.view.onFileChange).toHaveBeenCalled();
    });
  });
});
