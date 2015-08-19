describe('StackedColumnChart view', function() {
  beforeEach(function() {
    // Prepare HTML layout fixture before instance is created
    setFixtures('<div class="stacked-column-chart"></div>');

    this.view = new App.Views.StackedColumnChart({data:{}});

    this.view.render();
    this.container = $('.stacked-column-chart');
  });

  afterEach(function() {
    this.view.remove();
  });


  it('returns the view object', function() {
    expect(this.view.render()).toEqual(this.view);
  });

  it('produces the correct HTML', function() {
    expect(this.container).not.toBeEmpty();
    expect(this.container).toContainElement('.highcharts-container');
  });
});
