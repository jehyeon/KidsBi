var console = require('console');
var http = require('http');

module.exports.function = function getCategory() {
  const url = 'https://kidsbii.herokuapp.com/api/categories/';
  const options = { 
    format: 'json',
    headers:{
     Accept: 'application/json'
    },
  };

  const categoryInfos = http.getUrl(url, options);

  return categoryInfos;
}