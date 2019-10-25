var console = require('console');
var category = require('lib/categoryImageURL.js');

module.exports.function = function getCategory() {

  var output = category.showCategories();

  console.log(output);
  return output;
}