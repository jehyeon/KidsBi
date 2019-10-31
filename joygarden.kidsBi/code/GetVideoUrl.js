var http = require('http');
var config = require('config');

module.exports.function = function getVideoUrl (videoInfo) {
  const options = {
    format: 'json',
    headers: {
      Accept: 'application/json',
    },
  };
  const response = http.getUrl('https://' + config.get('url') + config.get('convert') + videoInfo.videoId, options);
  return response;
};
