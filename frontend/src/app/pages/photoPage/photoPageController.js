/* global Hammer:true */

'use strict';

app.controller('FotoController', function ($scope, $rootScope) {

  $rootScope.pageTypeClass = 'page-list-page page-latest-page';
  $rootScope.$emit('tracking');
});
