var http = require('http');

module.exports.function = function getQuiz (category) {
  const url = 'https://kidsbii.herokuapp.com/api/quizzes/';
  const options = { 
    format: 'json',
    headers:{
     Accept: 'application/json'
    },
  };

  return http.getUrl(url, options);
}
