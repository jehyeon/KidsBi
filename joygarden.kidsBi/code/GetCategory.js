var console = require('console');
var http = require('http');
var config = require('config');

module.exports.function = function getCategory() {
  const url = 'https://' + config.get('url') + config.get('category');
  const options = { 
    format: 'json',
    headers:{
     Accept: 'application/json'
    },
  };

  const categoryInfos = http.getUrl(url, options);

  return categoryInfos;
};
