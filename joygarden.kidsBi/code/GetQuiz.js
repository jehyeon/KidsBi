var http = require('http');
const dummy = require('./datas/dummy.js')

module.exports.function = function getQuiz (category) {
  // quizInfos = http.postUrl(url, options)
  // 후처리
  // return {

  // }

  // temporary
  const datas = dummy.quizInfos.map(quizInfo => {
    const updated = quizInfo;
    updated.options = quizInfo.options.split(',')
    return updated;
  });

  return datas;
}
