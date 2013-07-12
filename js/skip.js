'use strict';

angular.module('platanus.skip-filter', [])
  .filter('skip', function () {
    return function (input, skipCount) {
      return input.slice(skipCount);
    };
  });
