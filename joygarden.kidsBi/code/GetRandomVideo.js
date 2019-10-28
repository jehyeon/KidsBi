var http = require('http');

function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

module.exports.function = function getRandomVideo() {
  const url = 'https://kidsbii.herokuapp.com/api/videos/'; // It will be moved to propertise
  const options = {
    format: 'json',
    headers: {
      Accept: 'application/json',
    },
  };
  let parameters = '';

  const videos = http.getUrl(url + parameters, options);
  
  const result = videos.map(video => {
    const updated = video;
    updated['categories'] = video['categories'].split(',').map(category => category.trim());
    
    return updated;
  });

  return shuffle(result);
};
