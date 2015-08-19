describe('Dataset model', function() {

  it('is able to create its instance object', function() {
    expect(new App.Models.Dataset()).toBeDefined();
  });

  describe('as a new object without parameters passed', function() {
    beforeEach(function() {
      this.model = new App.Models.Dataset();
    });

    it('has its .data set to empty object', function() {
      expect(this.model.get('data')).toEqual({});
    });

    it('validates .data attribute with proper error message', function() {
      this.model.isValid();

      expect(this.model.validationError).toEqual('data is empty');
    });

    it('is invalid', function() {
      var isValid = this.model.isValid();
      expect(isValid).toBeFalsy();
    });
  });

  describe('as a new object with parameters passed', function() {
    beforeEach(function() {
      this.value = {name:'Test'};
      this.model = new App.Models.Dataset({data: this.value});
    });

    it('has its .data attribute set properly', function() {
      expect(this.model.get('data')).toEqual(this.value);
    });

    it('is valid', function() {
      var isValid = this.model.isValid();
      expect(isValid).not.toBeFalsy();
    });
  });
});
