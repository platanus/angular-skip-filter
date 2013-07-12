'use strict';

angular.module('platanus.filters', [])
  .filter('skip', function () {
    return function (input, skipCount) {
      return input.slice(skipCount);
    };
  });
