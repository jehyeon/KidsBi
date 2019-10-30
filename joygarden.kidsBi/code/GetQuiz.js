var http = require('http');
var config = require('config');
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

module.exports.function = function getQuiz (category) {
  const ap = ['A', 'B', 'C', 'D'];
  const url = 'https://' + config.get('url') + config.get('quiz');
  const options = { 
    format: 'json',
    headers:{
     Accept: 'application/json'
    },
  };

  const parameter = category
    ? '?category=' + category
    : '';

  const quizInfos = http.getUrl(url + parameter, options);
  const result = quizInfos.map(quizInfo => {
    const updated = quizInfo;
    updated.options = quizInfo.options.split(',').map((option, index) => {
      return ap[index] + ': ' + option
    });
    return updated;
  });

  return shuffle(result).slice(0,4);
}
