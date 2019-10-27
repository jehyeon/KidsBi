var console = require('console');

const categories = require('./lib/category');
module.exports.function = function selectCategory (categoryInfos, filterTerm, $vivContext) {
  if (categories && categories.length === 1) {
    return categories.videoCategory;
  }

  // temporary
  // const locale = $vivContext && $vivContext.locale
  //   ? $vivContext.locale
  //   : 'ko-KR';  // default ko-KR
  
  // console.log(filterTerm);
  // console.log(locale);

  // return 'Princess';
}
