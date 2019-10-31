var http = require('http');
var config = require('config');

module.exports.function = function getVideo(searchTerm, category) {
  const url = 'https://' + config.get('url') + config.get('video');
  const options = {
    format: 'json',
    headers: {
      Accept: 'application/json',
    },
  };
  let parameters = '';
  
  if (searchTerm) {
    parameters += '?title=' + encodeURIComponent(searchTerm.replace(/ /gi, ''));
  } else if (category) {
    parameters += '?categories=' + encodeURIComponent(category);
  }
  // searchTerm + category: select to searchTerm (in GetVideo.model.bxb) 

  const videos = http.getUrl(url + parameters, options);
  
  const result = videos.map(video => {
    const updated = video;
    updated['categories'] = video['categories'].split(',').map(category => category.trim());
    
    return updated;
  });

  return result;
};
