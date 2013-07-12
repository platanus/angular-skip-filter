'use strict';

describe('Filter: skip', function () {

  // load the filter's module
  beforeEach(module('platanus.filters'));

  // initialize a new instance of the filter before each test
  var skip, data;
  beforeEach(inject(function ($filter) {
    skip = $filter('skip');
    data = ['emilio', 'andres', 'negro', 'felipe', 'jaime'];
  }));

  it('should return an array:"', function () {
    expect(angular.isArray(skip(data))).toBe(true);
  });

  it('should skip two elements:"', function () {
    expect(skip(data, 2).length).toEqual(3);
  });

  it('should return the last 3 elements of the array:"', function () {
    var filtered = skip(data, 2);
    expect(filtered).toContain('negro');
    expect(filtered).toContain('felipe');
    expect(filtered).toContain('jaime');
  });

});
