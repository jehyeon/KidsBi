var http = require('http');
var console = require('console');

module.exports.function = function getVideo () {
  const url = 'http://***.***.***.***:5000/video';

  const result = http.getUrl(url, {
    format: 'text'
  });

  console.log(result);
  return 'test';
}
