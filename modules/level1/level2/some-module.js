define(function(require) {
  'use strict';

  var strContent = 'awesome content';

  var content = function() {
    return strContent;
  };

  var upperContent = function() {
    return strContent.toUpperCase();
  };

  return {
    content: content,
    upperContent: upperContent
  };

});