describe('LineChart view', function() {
  beforeEach(function() {
    // Prepare HTML layout fixture before instance is created
    setFixtures('<div class="line-chart"></div>');

    this.view = new App.Views.LineChart({data:{}});

    this.view.render();
    this.container = $('.line-chart');
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
