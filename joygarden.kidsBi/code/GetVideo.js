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
  // ! 우선 모든 vidoes를 return (정책 논의 필요)
  if (isCategory(argument)) {
    // category에서 검색
    const category = argument;
    return Object.keys(dummy.all).map(videoId => {
      if (dummy.all[videoId].categories.indexOf(category.valueOf()) > -1) {
        const searchResultByCategory = dummy.all[videoId];
        searchResultByCategory['videoId'] = videoId;
        console.log(searchResultByCategory);
        return {
          title: searchResultByCategory.title,
          videoId: searchResultByCategory.videoId,
        };
      }
    }).filter(video => video !== undefined);
  }

  // title에서 검색
  const searchTerm = argument;
  const searchResultBySearchTerm = Object.keys(dummy.all).map(videoId => {
    // ! 특수 문자 제거 필요 시 정규식 업데이트
    if (dummy.all[videoId].title.replace(/ /gi, '').indexOf(searchTerm.replace(/ /gi, '') > -1)) {
      return dummy.all[videoId];
    }
  }).filter(video => video !== undefined);
  
  // return searchResult.map(video => {
  //   title: video
  // })
}

module.exports.function = function getVideo(searchTerm, category) {
  if (searchTerm || category) {
    if (searchTerm) {
      return findVideoBy(searchTerm);
    }

    if (category) {
      return findVideoBy(category);
    }
  }

  return null;
};
