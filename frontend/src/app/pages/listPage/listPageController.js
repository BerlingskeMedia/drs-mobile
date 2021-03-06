/* global Hammer:true */

'use strict';

app.controller('ListController', function($scope, $rootScope, $routeParams, config, localStorageService, Latest, $location) {

    $scope.scrollRoute = true;
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
    }

    if (id in config.sectionsWithSubsectionsById) {
        if ('subsections' in config.sections[config.sectionsWithSubsectionsById[id]]) {
            $scope.hasSubsection = true;
            tag = config.sectionsWithSubsectionsById[id]
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
    $scope.showSportsTeams = false;

    $scope.displayed = config.itemsInSection;
    $scope.showTime = true;
    $scope.showExpandButton = true;
    $scope.expandButtonText = 'Vis flere';
    $scope.showMore = function() {
        
        var latest = Latest.get({
            id: id,
            items: 10,
            type: 'news_article',
            offset: config.itemsInSection
        });
        latest.$promise.then(function() {
            $scope.articles = $scope.articles.concat(latest.items);
            $scope.displayed = $scope.articles.length;
            $scope.showExpandButton = false;
        });
    }
    $scope.toggleSubsectionMenu = function() {
        $scope.subsectionVisible = !$scope.subsectionVisible;
    }
    // Check if current submenu is active
    // Done this akward way, because the same section
    // can have both a slug and an id as location.
    $scope.getSubmenuStatusClass = function(slug) {
        var currentLocation = $location.path();
        if (currentLocation[0] == '/') {
            currentLocation = currentLocation.substring(1);
        }
        if (slug == currentLocation) {
            return 'active';
        }
        if (slug in config.sections) {
            if (currentLocation == config.sections[slug].id) {
                return 'active';
            }
        }
        return;
    }
    var section = localStorageService.get('section-' + id + '-' + config.itemsInSection);
    if (section !== null) {
        $scope.articles = section.articles;
        $scope.header = section.header;
        $scope.showSportsTeams = section.showSportsTeams;
        $scope.contentLoading = false;
    }
    var latest = Latest.get({
        id: id,
        items: config.itemsInSection,
        type: 'news_article'
    });
    latest.$promise.then(function() {
        $scope.contentLoading = false;
        $scope.header = latest.category;
        if ($routeParams.tag in config.sections) {
            $scope.header = config.sections[$routeParams.tag].name;
        }
        $rootScope.metaTitle = $scope.header;
        // If we're on one of the subsections, display main section header
        if ($scope.hasSubsection) {
            // If it's a main subsection don't display sebheader
            if (tag == 'sport') {
                $scope.showSportsTeams = true;
            }
        }
        $scope.articles = latest.items;
        var listData = {
            header: $scope.header,
            articles: latest.items,
            showSportsTeams: $scope.showSportsTeams
        }
        localStorageService.set('section-' + id + '-' + config.itemsInSection, listData);
    });

    $rootScope.pageTypeClass = 'page-list-page';
    $rootScope.$emit('tracking');
});
