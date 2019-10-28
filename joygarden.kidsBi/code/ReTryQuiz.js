var console = require('console');

module.exports.function = function reTryQuiz (quizProgress) {
  console.log(quizProgress.done);
  console.log(quizProgress.done.valueOf() === true)
  if (quizProgress.done.valueOf() === true) {
    quizProgress.quizInfos.pop()
    quizProgress.result = ['false', 'false', 'false', 'false', 'false'];
    quizProgress.done = false;
    quizProgress.index = 0;

    return quizProgress;
  }

  return {}
}
