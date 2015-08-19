describe('Dashboard view', function() {
  beforeEach(function() {
    // Prepare HTML layout fixture before instance is created
    setFixtures('<section></section>');

    // Spy on methods before instance is created
    spyOn(App.Views.Dashboard.prototype, 'renderCharts').and.callThrough();

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
    expect(this.container).toContainElement('.uploader');
    expect(this.container).toContainElement('.stacked-column-chart');
    expect(this.container).toContainElement('.line-chart');
  });

  describe('responds to dataset model events', function() {
    it('change', function() {
      expect(this.container.find('.line-chart')).toBeEmpty();
      expect(this.container.find('.stacked-column-chart')).toBeEmpty();

      this.view.dataset.trigger('change');

      expect(this.container.find('.line-chart')).not.toBeEmpty();
      expect(this.container.find('.stacked-column-chart')).not.toBeEmpty();
      expect(this.view.renderCharts).toHaveBeenCalled();
    });
  });
});
