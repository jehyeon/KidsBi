var http = require('http');
var config = require('config');

module.exports.function = function getRandomVideo() {
  const options = {
    format: 'json',
    headers: {
      Accept: 'application/json',
    },
  };

  const videos = http.getUrl('https://' + config.get('url') + config.get('random'), options);
  const result = videos.map(video => {
    const updated = video;
    updated['categories'] = video['categories'].split(',').map(category => category.trim());
    
    return updated;
  });

  return result;
};
