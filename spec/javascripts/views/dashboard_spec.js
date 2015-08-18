describe('Dashboard view', function() {
  beforeEach(function() {
    setFixtures('<section></section>');
    dataset = new Backbone.Model();
    this.view = new App.Views.Dashboard({model:dataset});

    this.view.render();
    this.container = $('section');
  });

  afterEach(function() {
    this.view.remove();
  });


  it('returns the view object', function() {
    expect(this.view.render()).toEqual(this.view);
  });

  it('produces the correct HTML', function() {
    expect(this.container)
      .toContainElement('.uploader');

    expect(this.container.find('.passing-and-failing-builds  .panel-heading'))
      .toHaveText('passing and failing builds per day');
    expect(this.container.find('.passing-and-failing-builds  .panel-heading'))
      .toBeHidden();

    expect(this.container.find('.build-time-vs-time .panel-heading'))
      .toHaveText('build time vs. time');
    expect(this.container.find('.build-time-vs-time'))
      .toBeHidden();
  });

  describe('responds to dataset model events', function() {
    it('change', function() {
      expect(this.container.find('.build-time-vs-time')).toBeHidden();
      expect(this.container.find('.passing-and-failing-builds  .panel-heading')).toBeHidden();

      this.view.dataset.trigger('change');

      expect(this.container.find('.build-time-vs-time')).toBeVisible();
      expect(this.container.find('.passing-and-failing-builds  .panel-heading')).toBeVisible();
    });
  });
});
