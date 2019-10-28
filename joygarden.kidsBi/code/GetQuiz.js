var http = require('http');
const dummy = require('./lib/dummy.js')

module.exports.function = function getQuiz (category) {
  // quizInfos = http.postUrl(url, options)
  // 후처리
  // return {

  // }

  // temporary
  return dummy.quizInfos;
}
