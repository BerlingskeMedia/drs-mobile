/* global Hammer:true */

'use strict';

app.controller('ListController', function ($scope, $rootScope, $routeParams, config, localStorageService, Latest, $location) {
    // We need to lookup term-ids based on slugs in BOND - this is an UGLY  hack.
  var id = 0;
  var tag = '';
  if (!('tag' in $routeParams)) {
    $location.url('/404');
  }
  if ($routeParams.tag in config.sections) {
    id = config.sections[$routeParams.tag].id;
    if ('subsections' in config.sections[$routeParams.tag]) {
        $scope.hasSubsection = true;
        tag = $routeParams.tag;
    }
  }
  // If section is an ID (we can't link properly from teasers withour a slug)
  if (isFinite($routeParams.tag)) {
    id = $routeParams.tag;
    if (id in config.sectionsWithSubsectionsById) {
        if ('subsections' in config.sections[config.sectionsWithSubsectionsById[id]]) {
            $scope.hasSubsection = true;
            tag = config.sectionsWithSubsectionsById[id]
        }
    }
  }
  if (id === 0) {
      $location.url('/404');
  }

  if ($scope.hasSubsection) {
      $scope.submenuLinks = config.sections[tag].subsections;
  }
  $scope.subsectionVisible = false;
  $scope.contentLoading = true;



  $scope.showTime = true;

  $scope.toggleSubsectionMenu = function() {
    $scope.subsectionVisible = !$scope.subsectionVisible;
  }
  var section = localStorageService.get('section-' + id + '-' + config.itemsInSection);
  if (section !== null) {
    $scope.articles = section.items;
    $scope.header = section.category;
    $scope.contentLoading = false;
  }
  var latest =  Latest.get({id:id, items: config.itemsInSection, type: 'news_article'});
  latest.$promise.then(function(){
    $scope.contentLoading = false;
    $scope.header = latest.category;
    $scope.articles = latest.items;
    localStorageService.set('section-' + id + '-' + config.itemsInSection, latest);
  });

  $rootScope.pageTypeClass = 'page-list-page';
  $rootScope.$emit('tracking');
});
