var console = require('console');
var category = require('lib/category.js');
var dummy = require('dummy/data.js');

// Functions
function isCategory(_category) {
  // 지원 locale대로 업데이트되어야 함
  if (_category && category.list.indexOf(_category.valueOf()) > -1) {
    return true;
  }
  return false;
}

function findVideoBy(argument) {
  if (isCategory(argument)) {
    const category = argument;
    const videos = Object.keys(dummy.all).map(videoId => {
      if (dummy.all[videoId].categories.indexOf(category.valueOf()) > -1) {
        return dummy.all(videoId);
      }
    }).filter(video => video !== undefined);

    return videos;
  }
}

module.exports.function = function getVideo(searchTerm, category) {
  if (searchTerm) {
    return {
      findVideoBy(searchTerm)
    }
  }

  if (!searchTerm && category) {
    return findVideoBy(category);
  }
};
