var http = require('http');

module.exports.function = function getQuiz (category) {
  const url = 'https://kidsbii.herokuapp.com/api/quizzes/';
  const options = { 
    format: 'json',
    headers:{
     Accept: 'application/json'
    },
  };

  const parameter = category
    ? '?category=' + category
    : '';

  return http.getUrl(url + parameter, options);
}
