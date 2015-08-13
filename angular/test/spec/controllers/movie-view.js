'use strict';

describe('Controller: MovieViewCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var MovieViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieViewCtrl = $controller('MovieViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieViewCtrl.awesomeThings.length).toBe(3);
  });
});
