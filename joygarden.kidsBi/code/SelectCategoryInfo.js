var console = require('console');
const category = require('./datas/category.js');

module.exports.function = function selectCategoryInfo (categoryInfos, filterTerm, $vivContext) {
  const locale = $vivContext && $vivContext.locale
    ? $vivContext.locale
    : 'ko-KR';  // default
  const filteredCategory = Object.keys(category.list).map(videoCategory => {
    if (category.list[videoCategory][locale].indexOf(filterTerm.replace(/ /gi, '')) > -1) {
      return videoCategory;
    }
  }).filter(item => {
    if (typeof(item) != null) {
      return item;
    }
  });

  if (filteredCategory) {
    console.log(categoryInfos.find(category => category.videoCategory === filteredCategory[0]))
    return categoryInfos.find(category => category.videoCategory === filteredCategory[0]);
  }

  // No matching
  return categoryInfos; // re prompt
};
