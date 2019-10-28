var http = require('http');

module.exports.function = function getVideo(searchTerm, category) {
  const url = 'https://kidsbii.herokuapp.com/api/videos/'; // It will be moved to propertise
  const options = {
    format: 'json',
    headers: {
      Accept: 'application/json',
    },
  };
  let parameters = '';
  
  if (searchTerm) {
    parameters += '?title=' + searchTerm;
  } else if (category) {
    parameters += '?categories=' + category;
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
