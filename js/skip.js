'use strict';

angular.module('platanus.skip-filter', [])
  .filter('skip', function () {
    return function (input, skipCount) {
      if (!input) return input;
      return input.slice(skipCount);
    };
  });
