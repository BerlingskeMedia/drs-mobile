'use strict';

app.factory('Nodequeue', function($resource, BACKEND_ADDRESS) {
  return $resource(BACKEND_ADDRESS + '/content/nodequeue/:id/:items?output_type=json&mmfd_version=2.0&show_related=true&show_external=true&show_external_sources=true&image_size=:imagesize&author_image_size=400x&offset=:offset', {offset: 0});
});

