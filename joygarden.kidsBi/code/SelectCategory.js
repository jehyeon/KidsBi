var console = require('console');
const categories = require('./datas/category');

module.exports.function = function selectCategory (categoryInfos, filterTerm, $vivContext) {
  // if (categoryInfos && categoryInfos.length === 1) {
  //   return categoryInfos.videoCategory;
  // }
  return categoryInfos.videoCategory;

  // temporary
  // const locale = $vivContext && $vivContext.locale
  //   ? $vivContext.locale
  //   : 'ko-KR';  // default ko-KR
  
  // console.log(filterTerm);
  // console.log(locale);

  // return 'Princess';
}
